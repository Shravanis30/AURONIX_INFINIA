const mongoose = require('mongoose');
const Product = require('./models/Product');
const Blog = require('./models/Blog');
const dotenv = require('dotenv');

dotenv.config();

const products = [
  {
    slug: "advanced-icu-ventilator",
    name: "Advanced ICU Ventilator",
    category: "ICU Equipment",
    desc: "State-of-the-art ventilator designed for high-acuity patients requiring critical respiratory support. Featuring advanced FiO2 control and waveform analysis.",
    image: "/images/products/icu-ventilator.png",
    specs: {
      "Tidal Volume": "20 - 2000 ml",
      "FiO2": "21% - 100%",
      "PEEP": "0 - 45 cmH2O",
      "Modes": "CPAP, BiPAP, IPAP, SIMV, PCV"
    },
    features: ["Real-time waveform analysis", "4-hour battery backup", "Touchscreen interface"],
    featured: true
  },
  {
    slug: "multipara-patient-monitor",
    name: "Multipara Patient Monitor",
    category: "ICU Equipment",
    desc: "High-precision multi-parameter monitor for continuous tracking of vital signs in critical care.",
    image: "/images/products/patient-monitor.png",
    specs: {
      "Display": "12.1 inch Color TFT",
      "Parameters": "ECG, SpO2, NIBP, Respiration, Temp",
      "Storage": "720 hours trend data"
    },
    features: ["ST segment analysis", "Arrhythmia detection", "Wireless connectivity"],
    featured: true
  },
  {
    slug: "electric-icu-bed",
    name: "Electric ICU Bed",
    category: "Hospital Furniture",
    desc: "Fully motorized ICU bed with 5-function controls for patient comfort and clinical efficiency.",
    image: "/images/products/icu-bed.png",
    specs: {
      "Functions": "Hi-Lo, Backrest, Trendelenburg, Rev-Trend, Kneerest",
      "Capacity": "250 kg"
    },
    features: ["X-ray permeable backrest", "CPR function", "ABS headboards"],
    featured: true
  },
  {
    slug: "surgical-led-light",
    name: "Surgical LED Light",
    category: "Operation Theatre",
    desc: "Shadowless operation light with adjustable intensity and superior color rendering for OT precision.",
    image: "/images/products/surgical-light.png",
    specs: {
      "Intensity": "160,000 Lux",
      "LED Life": "> 50,000 hours"
    },
    features: ["Low heat generation", "Aerodynamic design", "Adjustable spot size"],
    featured: true
  },
  {
    slug: "anesthesia-workstation",
    name: "Anesthesia Workstation",
    category: "Operation Theatre",
    desc: "Integrated anesthesia delivery system with advanced ventilation and safety monitoring.",
    image: "/images/products/anesthesia-workstation.png",
    specs: {
      "Vaporizers": "Selectatec compatible",
      "Gas Supply": "O2, N2O, Air"
    },
    features: ["Compact ergonomic design", "Multiple ventilation modes", "Safety failure alarms"],
    featured: true
  },
  {
    slug: "motorized-ot-table",
    name: "Motorized OT Table",
    category: "Operation Theatre",
    desc: "Versatile motorized operating table designed to support various surgical positions with stability.",
    image: "/images/products/ot-table.png",
    specs: {
      "Positions": "Trendelenburg, Lateral tilt, Flex/Reflex",
      "Drive": "Electro-hydraulic"
    },
    features: ["C-arm compatible", "Remote operation", "Anti-static mattress"],
    featured: true
  },
  {
    slug: "walk-in-freezer-marken",
    name: "Walk In Freezer",
    category: "Medical Cold Chain",
    desc: "Large-scale cold storage solution for vaccines, blood plasma, and temperature-sensitive pharmaceuticals.",
    image: "/images/products/walk-in-freezer.png",
    specs: {
      "Temp Range": "-15\u00b0C to -25\u00b0C",
      "Insulation": "PUF Panels 100mm",
      "Control": "Digital PLC Controller"
    },
    features: ["External temp monitoring", "Safety alarm system", "Heavy-duty racks", "Restricted access lock"]
  },
  {
    slug: "ult-deep-freezer-86",
    name: "ULT Deep Freezer -86\u00b0C",
    category: "Medical Cold Chain",
    desc: "Ultra-low temperature freezer for long-term storage of biological samples and mRNA vaccines.",
    image: "/images/products/ult-freezer.png",
    specs: {
      "Temp Range": "-40\u00b0C to -86\u00b0C",
      "Capacity": "400 - 800 Liters",
      "Compressor": "Dual-stage cascade system"
    },
    features: ["Vacuum insulation panels", "Backup CO2 system compatibility", "Touchscreen log display"]
  },
  {
    slug: "ice-lined-refrigerator",
    name: "Ice Lined Refrigerator (ILR)",
    category: "Medical Cold Chain",
    desc: "Specialized refrigerator for vaccine storage with ice lining to maintain temperature during power outages.",
    image: "/images/products/ilr.png",
    specs: {
      "Holdover Time": "> 24 Hours",
      "Temp Range": "+2\u00b0C to +8\u00b0C"
    },
    features: ["CFC free refrigerant", "External temp display", "Top opening for minimal cold loss"]
  },
  {
    slug: "blood-bank-refrigerator",
    name: "Blood Bank Refrigerator",
    category: "Blood Bank Equipment",
    desc: "Precision refrigerator designed to keep blood bags at a constant +4\u00b0C with sophisticated monitoring.",
    image: "/images/products/blood-bank-refrigerator.png",
    specs: {
      "Operating Temp": "+4\u00b0C (\u00b11\u00b0C)",
      "Charts": "7-day circular chart recorder",
      "Capacity": "60 - 500 Bags"
    },
    features: ["Glass door for visibility", "Audio-visual alarms", "Battery backup for recorder"]
  }
];

const blogs = [
  {
    title: "The Complete Guide to Vaccine Transportation & Cold Chain Integrity",
    slug: "vaccine-transportation-guide",
    category: "Cold Chain",
    excerpt: "Ensuring 100% compliance during vaccine transit is critical. Learn about the latest cooling technologies.",
    content: "Full content here...",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    publishedAt: new Date("2024-04-24")
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
