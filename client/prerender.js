import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error(`Error: Base build template not found at ${TEMPLATE_PATH}. Run 'npm run build' first.`);
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Static detailed services matching client/src/data/servicesDetailed.js
const servicesDetailed = {
  'software-development': {
    title: 'Software Development Services',
    hook: 'Custom software built around your workflow, not the other way around.',
    deliverables: ['SaaS platforms', 'Internal tools & admin panels', 'API & microservices', 'Legacy system modernization'],
    tools: ['TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
    bestFor: 'Teams outgrowing spreadsheets, off-the-shelf SaaS, or aging legacy systems.',
  },
  'web-development': {
    title: 'Web Development Services',
    hook: 'Marketing sites and web apps engineered for speed, craft, and conversion.',
    deliverables: ['Marketing websites', 'Dashboards & portals', 'Headless CMS integrations', 'SEO & Core Web Vitals'],
    tools: ['Next.js', 'React', 'Tailwind', 'Sanity', 'Vercel'],
    bestFor: 'Founders and brands who care how their product reads online.',
  },
  'mobile-app-development': {
    title: 'Mobile App Development Services',
    hook: 'Native-feeling apps that earn a permanent home on the home screen.',
    deliverables: ['iOS & Android builds', 'Cross-platform apps', 'App Store deployment', 'Offline-first experiences'],
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    bestFor: 'Consumer products and field-team tools that have to work on the move.',
  },
  'ui-ux-design': {
    title: 'UI / UX Design Services',
    hook: 'Interfaces that feel obvious to users and unmistakable to your brand.',
    deliverables: ['Research & user interviews', 'IA & hi-fi prototypes', 'Design system in Figma', 'Motion specs & dev handoff'],
    tools: ['Figma', 'FigJam', 'Framer', 'Maze'],
    bestFor: 'Teams launching a new product or rethinking a confusing existing one.',
  },
  'ai-solutions': {
    title: 'AI Solutions & Integration',
    hook: 'Practical AI that ships in production, not just on a slide.',
    deliverables: ['LLM copilots & chat', 'RAG over private data', 'Document & PDF extraction', 'Workflow automation'],
    tools: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'Python'],
    bestFor: 'Teams applying AI to a specific pain point, not chasing a buzzword.',
  },
  'cloud-services': {
    title: 'Cloud Services & DevOps',
    hook: "A cloud setup you don't have to think about, until you want to scale it.",
    deliverables: ['AWS / GCP / Azure architecture', 'CI/CD pipelines', 'Containerization & Kubernetes', 'Monitoring & cost audits'],
    tools: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    bestFor: 'Products that need to handle real traffic without late-night surprises.',
  },
  'enterprise-solutions': {
    title: 'Enterprise Software Solutions',
    hook: 'Production-grade systems your security and ops teams will actually approve.',
    deliverables: ['SSO, RBAC & audit logs', 'Multi-tenant architecture', 'Compliance-ready foundations', 'Legacy migration'],
    tools: ['Okta', 'PostgreSQL', 'Kafka', 'Redis', 'Kubernetes'],
    bestFor: 'Mid-to-large businesses with security, scale, and reliability constraints.',
  },
  'it-consulting': {
    title: 'IT Consulting & Technology Audits',
    hook: 'A senior engineering brain on call, without the full-time hire.',
    deliverables: ['Tech audits & architecture reviews', 'Roadmaps & vendor selection', 'Hiring support for tech roles', 'Fractional CTO engagements'],
    tools: ['Stack-agnostic'],
    bestFor: 'Founders and non-technical CEOs making big tech decisions.',
  },
  'digital-transformation': {
    title: 'Digital Transformation Services',
    hook: 'Move from spreadsheets, paper, and habit to systems that compound.',
    deliverables: ['Process mapping & audits', 'ERP & CRM rollouts', 'Workflow automation', 'Data migration & team training'],
    tools: ['Our ERP suite', 'Zapier', 'n8n', 'Airtable', 'Custom builds'],
    bestFor: 'Traditional businesses ready to modernize without ripping everything out.',
  }
};

// Define baseline Organization schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.innonsh.com/#organization",
  "name": "Innonsh Technologies",
  "url": "https://www.innonsh.com",
  "logo": "https://www.innonsh.com/tab_logo.png",
  "sameAs": [
    "https://linkedin.com/company/innonsh"
  ]
};

// Define LocalBusiness schema for Ravet, Pune address
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.innonsh.com/#localbusiness",
  "name": "Innonsh Technologies",
  "image": "https://www.innonsh.com/tab_logo.png",
  "telephone": "",
  "url": "https://www.innonsh.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ravet",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "412101",
    "addressCountry": "IN"
  }
};

const routes = {
  '/': {
    title: 'Innonsh Technologies | Every Innovation begins with Ansh',
    description: 'Innonsh Technologies is a full-stack product studio engineering software development, AI solutions, web platforms, and mobile apps for ambitious teams.',
    canonical: 'https://www.innonsh.com/',
    schemas: [
      organizationSchema,
      localBusinessSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.innonsh.com",
        "name": "Innonsh Technologies"
      }
    ],
    body: `
      <div style="display:none">
        <h1>Innonsh Technologies</h1>
        <p>Every Innovation begins with Ansh.</p>
        <h2>A full-stack studio for ambitious teams</h2>
        <p>From research-led product design to AI-powered platforms and large-scale enterprise systems we ship work that compounds for years.</p>
        <h3>Our Services</h3>
        <ul>
          <li>Software Development</li>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI / UX Design</li>
          <li>AI Solutions</li>
          <li>Cloud Services</li>
          <li>Enterprise Solutions</li>
          <li>IT Consulting</li>
          <li>Digital Transformation</li>
        </ul>
        <h3>Why Innonsh?</h3>
        <p>We combine design craft, technical depth, and operations discipline. We deliver high-fidelity engineering that aligns with business outcomes.</p>
      </div>
    `
  },
  '/privacy': {
    title: 'Privacy Policy | Innonsh Technologies',
    description: 'Read the Privacy Policy of Innonsh Technologies to understand how we collect, use, and protect your personal information.',
    canonical: 'https://www.innonsh.com/privacy',
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://www.innonsh.com/privacy"
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>Privacy Policy</h1>
        <p>Last updated: June 16, 2026</p>
        <p>Innonsh Technologies is committed to protecting your privacy. This Privacy Policy describes how we collect, use, process, and disclose your information when you visit or use our services.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out a contact form, apply for a job, or inquire about services.</p>
        <h2>How We Use Information</h2>
        <p>We use your information to provide, maintain, and improve our services, communicate with you, and process applications.</p>
      </div>
    `
  },
  '/terms': {
    title: 'Terms of Service | Innonsh Technologies',
    description: 'Read the Terms of Service for Innonsh Technologies governing the use of our website, digital products, and consulting services.',
    canonical: 'https://www.innonsh.com/terms',
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://www.innonsh.com/terms"
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>Terms of Service</h1>
        <p>Last updated: June 16, 2026</p>
        <p>By accessing or using the services of Innonsh Technologies, you agree to comply with and be bound by these Terms of Service. Please review them carefully.</p>
        <h2>Use of Services</h2>
        <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms.</p>
        <h2>Intellectual Property</h2>
        <p>All content, branding, code, and interfaces are the intellectual property of Innonsh Technologies unless otherwise stated.</p>
      </div>
    `
  },
  '/careers': {
    title: 'Careers | Join the Team at Innonsh Technologies',
    description: 'Join Innonsh Technologies. Explore open roles in Web Development, Mobile Apps, AI, UI/UX, and DevOps. Build the future of software with us.',
    canonical: 'https://www.innonsh.com/careers',
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers",
            "item": "https://www.innonsh.com/careers"
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>Careers at Innonsh Technologies</h1>
        <h2>Join a team of builders, engineers, and designers</h2>
        <p>We work on challenging technical problems, building premium digital products for ambitious teams worldwide.</p>
        <h3>Open Domains</h3>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>QA & Testing</li>
          <li>DevOps & Cloud</li>
          <li>Project Management</li>
        </ul>
        <p>Submit your application through our career portal to join us.</p>
      </div>
    `
  },
  '/tinysteps': {
    title: 'TinySteps - Pre-School Management System | Innonsh',
    description: 'TinySteps is an all-in-one pre-school management software by Innonsh Technologies, streamlining admissions, attendance, fees, and parent communication.',
    canonical: 'https://www.innonsh.com/tinysteps',
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "TinySteps",
            "item": "https://www.innonsh.com/tinysteps"
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>TinySteps Preschool Management System</h1>
        <p>The modern, intuitive dashboard for preschools and nurseries. Empower teachers, coordinate parent-teacher collaborations, and streamline administrative billing.</p>
        <h2>Key Modules</h2>
        <ul>
          <li>Admissions & Student Registry</li>
          <li>Daily Attendance Tracking</li>
          <li>Automatic Billing & Fee Collection</li>
          <li>Direct Parent Communication App</li>
          <li>Classroom Schedules & Reports</li>
        </ul>
      </div>
    `
  },
  '/tinysteps/login': {
    title: 'Login - TinySteps Preschool Management System',
    description: 'Log in to your TinySteps preschool administration or parent portal.',
    canonical: 'https://www.innonsh.com/tinysteps/login',
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "TinySteps",
            "item": "https://www.innonsh.com/tinysteps"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Login",
            "item": "https://www.innonsh.com/tinysteps/login"
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>TinySteps Login</h1>
        <p>Access your TinySteps account to manage your preschool, check child attendance, pay fees, or view classroom activity.</p>
      </div>
    `
  }
};

// Generate dynamic service routes
Object.keys(servicesDetailed).forEach((slug) => {
  const service = servicesDetailed[slug];
  const url = `https://www.innonsh.com/services/${slug}`;
  
  routes[`/services/${slug}`] = {
    title: `${service.title} | Innonsh Technologies`,
    description: `${service.hook} We deliver deliverables like ${service.deliverables.join(', ')} using stack: ${service.tools.join(', ')}.`,
    canonical: url,
    schemas: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Innonsh Technologies",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Ravet",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "412101",
            "addressCountry": "IN"
          }
        },
        "description": service.hook,
        "offers": {
          "@type": "Offer",
          "description": `Custom engineering services for ${service.title}`
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.innonsh.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.innonsh.com/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": url
          }
        ]
      }
    ],
    body: `
      <div style="display:none">
        <h1>${service.title}</h1>
        <p>${service.hook}</p>
        <h2>What we deliver:</h2>
        <ul>
          ${service.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
        <h2>Tools and technologies we use:</h2>
        <p>${service.tools.join(', ')}</p>
        <h2>Best for:</h2>
        <p>${service.bestFor}</p>
      </div>
    `
  };
});

// Run prerender generation
console.log('Starting prerendering process...');

Object.keys(routes).forEach((routePath) => {
  const meta = routes[routePath];
  let html = template;

  // 1. Replace title
  const titleRegex = /<title>.*?<\/title>/i;
  const newTitle = `<title>${meta.title}</title>`;
  if (titleRegex.test(html)) {
    html = html.replace(titleRegex, newTitle);
  } else {
    html = html.replace('<head>', `<head>\n    ${newTitle}`);
  }

  // 2. Inject Meta Description and Canonical tag
  let headInjections = `\n    <meta name="description" content="${meta.description}" />`;
  headInjections += `\n    <link rel="canonical" href="${meta.canonical}" />`;
  
  // 3. Inject Schemas
  meta.schemas.forEach((schema) => {
    headInjections += `\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  });
  
  html = html.replace('</head>', `${headInjections}\n  </head>`);

  // 4. Inject Pre-rendered Body into #root
  const rootDiv = '<div id="root"></div>';
  const rootDivReplacement = `<div id="root">${meta.body}</div>`;
  if (html.includes(rootDiv)) {
    html = html.replace(rootDiv, rootDivReplacement);
  } else {
    // Fallback if formatting differs
    html = html.replace(/<div id="root"\s*><\/div>/, rootDivReplacement);
  }

  // 5. Write file output
  let outputFilePath;
  if (routePath === '/') {
    outputFilePath = TEMPLATE_PATH; // Root index.html
  } else {
    // Generate subfolder index.html
    const subfolderPath = path.join(DIST_DIR, routePath);
    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath, { recursive: true });
    }
    outputFilePath = path.join(subfolderPath, 'index.html');
  }

  fs.writeFileSync(outputFilePath, html, 'utf8');
  console.log(`Generated prerendered page for: ${routePath} -> ${outputFilePath}`);
});

console.log('Prerendering completed successfully!');
