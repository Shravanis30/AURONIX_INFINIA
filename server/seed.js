const mongoose = require('mongoose');
const Product = require('./models/Product');
const Blog = require('./models/Blog');
const dotenv = require('dotenv');

dotenv.config();

const products = [
  {
    name: "Advanced ICU Ventilator V1",
    category: "ICU Equipment",
    description: "State-of-the-art ventilator with CPAP, BiPAP, and IPAP modes.",
    specs: { "FiO2": "21-100%", "Tidal Volume": "20-2000ml" },
    featured: true
  },
  {
    name: "Multipara Patient Monitor",
    category: "ICU Equipment",
    description: "12-lead ECG, SpO2, NIBP monitoring.",
    featured: true
  },
  {
    name: "Motorized OT Table",
    category: "Operation Theatre",
    description: "Radiolucent table with multi-position controls.",
    featured: true
  }
];

const blogs = [
  {
    title: "BiPAP vs CPAP: Choosing the Right Support",
    slug: "bipap-vs-cpap",
    category: "Technical Guide",
    excerpt: "Understanding the pressure dynamics for critical care.",
    content: "Full content here..."
  }
];

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auronix_infinia')
  .then(async () => {
    console.log('Seeding data...');
    await Product.deleteMany({});
    await Blog.deleteMany({});
    await Product.insertMany(products);
    await Blog.insertMany(blogs);
    console.log('Seeding complete!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
