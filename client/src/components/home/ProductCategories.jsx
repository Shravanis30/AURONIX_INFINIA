import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Activity, Wind, Bed, FlaskConical, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "ICU Equipment",
    icon: Monitor,
    desc: "Advanced Ventilators, Patient Monitors, and critical care life-support systems.",
    products: "40+ Units",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    accent: "#1A7A8A",
    path: "/products?category=ICU Equipment"
  },
  {
    title: "Operation Theatre",
    icon: Activity,
    desc: "Precision OT Tables, Surgical Lighting, and integrated anesthesia workstations.",
    products: "25+ Units",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/324402810/HQ/UY/DT/148547795/modular-operation-theatre-1000x1000.jpg",
    accent: "#2BA8C5",
    path: "/products?category=Operation Theatre"
  },
  {
    title: "Respiratory Care",
    icon: Wind,
    desc: "High-performance BiPAP, CPAP, and non-invasive ventilation solutions.",
    products: "30+ Units",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    accent: "#5BBD4E",
    path: "/products?category=Respiratory Care"
  },
  {
    title: "Medical Cold Chain",
    icon: FlaskConical,
    desc: "ULT Freezers, Vaccine Refrigerators, and blood storage systems.",
    products: "15+ Units",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    accent: "#E85D26",
    path: "/products?category=Medical Cold Chain"
  },
  {
    title: "Hospital Furniture",
    icon: Bed,
    desc: "Ergonomic Patient Beds, Examination Tables, and ward utility furniture.",
    products: "20+ Units",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    accent: "#8CC63F",
    path: "/products?category=Hospital Furniture"
  },
  {
    title: "Consumables",
    icon: Zap,
    desc: "High-quality circuits, sensors, and essential clinical accessories.",
    products: "60+ Units",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    accent: "#1A4A30",
    path: "/products?category=Consumables & Accessories"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1A7A8A20 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-lg mb-5 border border-brand-teal/20">
              Expertise & Precision
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy leading-[1.1]">
              Our Product <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Categories</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:text-right max-w-sm"
          >
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Pune's most trusted portfolio of life-critical medical technology and hospital infrastructure.
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 text-brand-navy font-bold text-sm uppercase tracking-widest hover:text-brand-teal transition-colors"
            >
              Explore Full Portfolio
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ cat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer bg-brand-navy"
    >
      {/* Background Image with Hover Zoom */}
      <img
        src={cat.image}
        alt={cat.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
        {/* Category Badge (Floats up on hover) */}
        <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            {cat.products} Available
          </span>
        </div>

        {/* Title & Icon (Icon rotates on hover) */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <h3 className="text-3xl font-heading font-extrabold text-white leading-tight">
            {cat.title}
          </h3>
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg]"
            style={{ backgroundColor: `${cat.accent}40`, border: `1px solid ${cat.accent}60` }}
          >
            <cat.icon size={22} className="text-white" />
          </div>
        </div>

        {/* Description (Reveals on hover or slide up) */}
        <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-[80%] transform transition-all duration-500 opacity-80 group-hover:opacity-100">
          {cat.desc}
        </p>

        {/* CTA Button */}
        <Link
          to={cat.path}
          className="w-full py-4 rounded-2xl bg-white text-brand-navy font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl"
        >
          View Collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Decorative Border Glow */}
      <div
        className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-[2.5rem] transition-colors duration-500 pointer-events-none"
      />
    </motion.div>
  );
};

export default ProductCategories;
