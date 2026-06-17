const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const { z } = require('zod');
require('dotenv').config();
const multer = require('multer');
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 5000;

// 1. Security Headers (Helmet)
// Includes Content Security Policy, Frame Protection, HSTS, Referrer Policy, and XSS Protection
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // unsafe-inline may be needed for some React dev tools, but limit in prod if possible
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:5173", "https://innonsh.com"],
      fontSrc: ["'self'", "https:", "data:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false, // Sometimes breaks resources if not configured perfectly across all assets
}));

// 2. CORS Security
const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'https://innonsh.com'];
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests) if desired, but here we restrict to allowedOrigins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 3. Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: { success: false, message: 'Too many requests from this IP, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// Specific stricter rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 contact requests per hour
  message: { success: false, message: 'Too many contact requests from this IP, please try again after an hour' }
});

// Body parser
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent DOS

// 4. Data Sanitization against XSS
// Removed xss() as it throws 'Cannot set property query of #<IncomingMessage> which has only a getter' in newer Node versions

// Contact Form Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name cannot exceed 100 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20, "Phone number is too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message cannot exceed 2000 characters"),
  honeypot: z.string().max(0, "Spam detected").optional() // Honeypot field for spam bots
});

const inquirySchema = z.object({
  service: z.string().min(2, "Service must be selected"),
  companyName: z.string().min(2, "Company Name must be at least 2 characters").max(200),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20, "Phone number is too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  honeypot: z.string().max(0, "Spam detected").optional()
});

// Basic health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Innonsh server is running securely' });
});

// Google Site Verification
app.get('/googlec0a3c9e7080a8432.html', (req, res) => {
  res.send('google-site-verification: googlec0a3c9e7080a8432.html');
});

// Contact API
app.post('/api/contact', contactLimiter, (req, res, next) => {
  try {
    // Validate input
    const validatedData = contactSchema.parse(req.body);

    // If honeypot is filled out, silently reject as it's a bot
    if (validatedData.honeypot) {
      return res.status(200).json({ success: true, message: 'Message received successfully.' });
    }

    const { name, email, phone, message } = validatedData;
    
    // Log the contact (Email sending service can be integrated here later)
    console.log(`Received secure contact from ${name} (${email}): ${message}`);
    
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Error (Contact):', error.issues || error);
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: error.issues ? error.issues.map(e => e.message) : [error.message]
      });
    }
    next(error);
  }
});

// Multer configurations for file uploads (Memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only .pdf, .doc, and .docx files are allowed!'), false);
    }
  }
});

// Zod validation for applications
const applicationSchema = z.object({
  jobId: z.string().min(1, "Job ID is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  experience: z.string().min(1, "Experience details are required"),
  domainsInterested: z.enum([
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "QA & Testing",
    "DevOps & Cloud",
    "Project Management",
    "None"
  ], {
    errorMap: () => ({ message: "Invalid domain selection" })
  }),
  coverNote: z.string().max(3000).optional(),
  honeypot: z.string().max(0, "Spam detected").optional()
});

// Careers Application API with SMTP Forwarding
app.post('/api/careers/apply', contactLimiter, async (req, res, next) => {
  try {
    // Validate text fields
    const validatedData = applicationSchema.parse(req.body);

    if (validatedData.honeypot) {
      return res.status(200).json({ success: true, message: 'Application submitted successfully.' });
    }

    const { jobId, jobTitle, name, email, phone, experience, domainsInterested, coverNote } = validatedData;
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO_EMAIL, SMTP_FROM_EMAIL } = process.env;

    // Check if SMTP is configured, else log to console as fallback testing mode
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.warn("SMTP settings are not fully configured. Running in local test log mode.");
      console.log("Candidate job application details:", {
        jobId, jobTitle, name, email, phone, experience, domainsInterested, coverNote
      });
      return res.status(200).json({ 
        success: true, 
        message: 'Application received successfully. (Server running in offline SMTP test mode)' 
      });
    }

    // Configure Transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT) || 465,
      secure: parseInt(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Mail setup
    const mailOptions = {
      from: `"${name} (Job Applicant)" <${SMTP_FROM_EMAIL}>`,
      to: SMTP_TO_EMAIL,
      cc: 'info@innonsh.com',
      replyTo: email,
      subject: `[Job Application] ${jobTitle} - ${name}`,
      text: `
Job Application Received:
-------------------------
Position: ${jobTitle} (ID: ${jobId})
Candidate Name: ${name}
Email: ${email}
Phone: ${phone}
Experience: ${experience}
Other Domains Interested: ${domainsInterested}

Cover Note:
${coverNote || 'No cover note provided.'}
      `,
      html: `
        <h3>New Job Application Received</h3>
        <p><strong>Position:</strong> ${jobTitle} (ID: ${jobId})</p>
        <p><strong>Candidate Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Other Domains Interested:</strong> ${domainsInterested}</p>
        <br/>
        <p><strong>Cover Note:</strong></p>
        <p style="white-space: pre-wrap; background: #f5f5f7; padding: 15px; border-radius: 6px; border: 1px solid #e5e5eb;">${coverNote || 'No cover note provided.'}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Application submitted successfully!' });

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Error (Apply):', error.issues || error);
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: error.issues ? error.issues.map(e => e.message) : [error.message]
      });
    }
    next(error);
  }
});

// Inquiry API for CRM Lead Integration
app.post('/api/inquiry', contactLimiter, async (req, res, next) => {
  try {
    const validatedData = inquirySchema.parse(req.body);

    if (validatedData.honeypot) {
      return res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
    }

    const CRM_URL = process.env.CRM_API_URL;
    const API_KEY = process.env.WEBSITE_API_KEY;

    if (!CRM_URL || !API_KEY) {
      console.error('CRM Integration missing ENV variables!');
      return res.status(500).json({ success: false, message: 'Integration Error' });
    }

    // Forward to CRM
    const response = await fetch(CRM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(validatedData)
    });

    const crmData = await response.json();

    if (!response.ok) {
      console.error('CRM API rejected lead:', crmData);
      return res.status(500).json({ success: false, message: 'Failed to save lead in CRM' });
    }

    res.status(201).json({ success: true, message: 'Inquiry submitted successfully.' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Error (Inquiry):', error.issues || error);
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: error.issues ? error.issues.map(e => e.message) : [error.message]
      });
    }
    next(error);
  }
});

// 5. Global Error Handling Middleware
// Prevents stack traces and sensitive details from leaking to the client
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.message);
  
  // Custom CORS error handling to be user-friendly
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ success: false, message: 'CORS policy violation' });
  }

  res.status(500).json({
    success: false,
    message: 'An internal server error occurred.'
  });
});

// Start listening if not running in production serverless environment (like Vercel)
if (process.env.NODE_ENV !== 'production' || process.env.LOCAL_DEV === 'true') {
  app.listen(PORT, () => {
    console.log(`Secure server listening on port ${PORT}`);
  });
}

module.exports = app;
