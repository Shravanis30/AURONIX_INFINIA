import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

import { products as allProducts } from '../../data/products';
import { Link } from 'react-router-dom';

const products = allProducts.slice(0, 6);

const ProductCard = ({ product }) => (
  <motion.div 
    className="min-w-[320px] md:min-w-[400px] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mx-4"
    whileHover={{ y: -10 }}
  >
    <Link to={`/products/${product.slug}`}>
      <div className="h-64 bg-gray-50 relative group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-brand-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {product.category}
        </div>
      </div>
    </Link>
    <div className="p-8">
      <Link to={`/products/${product.slug}`}>
        <h3 className="text-2xl font-heading font-bold text-brand-navy mb-3 hover:text-brand-teal transition-colors">{product.name}</h3>
      </Link>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed h-10 line-clamp-2">
        {product.desc}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center space-x-2 border-2 border-brand-teal/20 text-brand-teal py-3 rounded-xl font-bold text-sm hover:bg-brand-teal hover:text-white transition-all">
          <FileText size={16} />
          <span>Datasheet</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-brand-orange text-white py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-orange/20">
          <MessageCircle size={16} />
          <span>Quote</span>
        </button>
      </div>
    </div>
  </motion.div>
);

const FeaturedProducts = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    
    scrollContainer.addEventListener('mouseenter', () => cancelAnimationFrame(animationFrameId));
    scrollContainer.addEventListener('mouseleave', () => animationFrameId = requestAnimationFrame(scroll));

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-heading font-extrabold text-brand-navy mb-4">Featured Equipment</h2>
          <p className="text-gray-500">Precision-engineered solutions for life-critical environments.</p>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="p-3 rounded-full bg-white text-brand-navy shadow-lg hover:bg-brand-teal hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button className="p-3 rounded-full bg-white text-brand-navy shadow-lg hover:bg-brand-teal hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Doubling products for seamless loop effect */}
        {[...products, ...products].map((product, i) => (
          <ProductCard key={`${product.id}-${i}`} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
