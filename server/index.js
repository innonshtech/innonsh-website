const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Innonsh server is running' });
});

// Contact API placeholder
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
