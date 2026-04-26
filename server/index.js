const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'https://auronix-infinia.vercel.app', // Update this after deploying to Vercel
  'https://auronixinfinia.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auronix_infinia')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Models
const Product = require('./models/Product');
const Enquiry = require('./models/Enquiry');
const Blog = require('./models/Blog');

// Routes

// Products API
app.get('/api/products', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Enquiry API
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, organization, phone, email, category, message } = req.body;
    
    // Save to DB
    const newEnquiry = new Enquiry({ name, organization, phone, email, category, message });
    await newEnquiry.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'info@auronixinfinia.com',
      subject: `New Enquiry from ${name} - ${organization}`,
      text: `
        Name: ${name}
        Organization: ${organization}
        Phone: ${phone}
        Email: ${email}
        Category: ${category}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Enquiry submitted successfully' });
  } catch (err) {
    console.error('Enquiry error:', err);
    res.status(500).json({ message: 'Failed to submit enquiry. Please try again later.' });
  }
});

// Blog API
app.get('/api/blog', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publishedAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/blog/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
