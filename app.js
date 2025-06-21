const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Empowering Businesses with Scalable Tech Solutions.";

// Ensure logs directory exists
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Logging middleware
app.use((req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFileSync(path.join(logDir, 'output.log'), log);
  next();
});

// Serve home page with styled HTML directly from app.js
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>NextGen Tech Solutions</title>
      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #0f172a;
          color: #f1f5f9;
        }
        header {
          background-color: #1e293b;
          padding: 20px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        header h1 {
          color: #38bdf8;
          margin: 0;
        }
        nav a {
          margin-left: 20px;
          text-decoration: none;
          color: #f8fafc;
        }
        .hero {
          padding: 60px 20px;
          background: linear-gradient(to right, #0ea5e9, #3b82f6);
          text-align: center;
        }
        .hero h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: auto;
        }
        footer {
          background-color: #1e293b;
          color: #94a3b8;
          text-align: center;
          padding: 20px;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>NextGen Tech</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/api/message">API</a>
        </nav>
      </header>
      <section class="hero">
        <h2>Innovating the Future of Technology</h2>
        <p>${message}</p>
      </section>
      <footer>
        &copy; 2025 NextGen Tech. All rights reserved.
      </footer>
    </body>
    </html>
  `);
});

// Optional API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

