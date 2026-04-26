import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, CheckCircle2, Truck, ShieldCheck, Settings, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-4xl font-heading font-black text-brand-navy mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-8">The requested equipment might have been moved or removed.</p>
        <Link to="/products" className="bg-brand-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-teal transition-all">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <Link to="/products" className="inline-flex items-center space-x-2 text-brand-teal font-bold mb-8 hover:text-brand-navy transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Catalog</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square bg-brand-light rounded-3xl overflow-hidden border border-gray-100 shadow-2xl relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-6 right-6">
                <span className="bg-white/90 backdrop-blur shadow-lg text-brand-teal text-xs font-black px-4 py-2 rounded-full uppercase tracking-tighter">
                  Premium Range
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 cursor-pointer hover:border-brand-teal transition-all group">
                   <img src={product.image} alt="thumb" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="bg-brand-teal/10 text-brand-teal text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3 md:mb-4">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-navy mb-4 md:mb-6 leading-tight">{product.name}</h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">{product.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={`https://wa.me/919112223296?text=I'm interested in ${product.name}`}
                className="flex items-center justify-center space-x-3 bg-brand-orange text-white py-5 rounded-2xl font-bold shadow-xl shadow-brand-orange/20 hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} />
                <span>Request Pricing</span>
              </a>
              <button className="flex items-center justify-center space-x-3 bg-white border-2 border-brand-teal text-brand-teal py-5 rounded-2xl font-bold hover:bg-brand-teal hover:text-white transition-all shadow-lg shadow-brand-teal/5">
                <Settings size={24} />
                <span>Technical Demo</span>
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-6 pt-6">
              <h3 className="font-heading font-bold text-2xl text-brand-navy">Core Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {product.features.map(f => (
                  <div key={f} className="flex items-center space-x-4 bg-brand-light/50 p-4 rounded-xl border border-brand-teal/5 hover:border-brand-teal/20 transition-colors">
                    <div className="w-8 h-8 bg-brand-teal/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 size={18} className="text-brand-teal" />
                    </div>
                    <span className="text-brand-navy font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Bar */}
            <div className="grid grid-cols-3 gap-4 pt-4">
               <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                 <Truck size={24} className="text-brand-teal mb-2" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">PAN India Delivery</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                 <ShieldCheck size={24} className="text-brand-teal mb-2" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">OEM Warranty</span>
               </div>
               <div className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                 <Settings size={24} className="text-brand-teal mb-2" />
                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Service Support</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specs Table */}
        <section className="mt-24">
          <div className="bg-brand-navy rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
            <div className="p-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-brand-navy to-brand-teal/20">
              <div>
                <h3 className="text-3xl font-heading font-bold text-white mb-2">Technical Specifications</h3>
                <p className="text-brand-teal text-sm font-medium">Detailed performance metrics and engineering data</p>
              </div>
              <button className="flex items-center space-x-3 bg-white text-brand-navy px-8 py-4 rounded-2xl font-bold hover:bg-brand-teal hover:text-white transition-all shadow-xl">
                <FileText size={20} />
                <span>Technical Data Sheet</span>
              </button>
            </div>
            <div className="p-0">
              <div className="flex flex-col">
                {Object.entries(product.specs).map(([key, val], i) => (
                  <div 
                    key={key} 
                    className={`flex flex-col md:flex-row border-b border-white/5 transition-colors hover:bg-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <div className="p-4 md:p-8 text-brand-teal font-heading font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] md:w-1/3 bg-white/5 md:bg-transparent">
                      {key}
                    </div>
                    <div className="p-4 md:p-8 text-gray-300 font-medium text-sm md:text-base">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
