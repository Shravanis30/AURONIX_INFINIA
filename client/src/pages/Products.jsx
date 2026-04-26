import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MessageCircle, FileText, ChevronRight } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';

const categories = [
  "All",
  "ICU Equipment",
  "Operation Theatre",
  "Medical Cold Chain",
  "Blood Bank Equipment",
  "Hospital Infra & Solutions",
  "Diagnostic & Laboratory",
  "Respiratory Care",
  "Hospital Furniture",
  "Consumables & Accessories"
];

import { products as allProducts } from '../data/products';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(p => {
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });



  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Premium Header */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent z-10" />
          <img 
            src="/images/products/ot-table.png" 
            className="w-full h-full object-cover grayscale" 
            alt="header-bg"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-brand-teal font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Medical Solutions</span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-400">Portfolio</span>
            </h1>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Explore our curated selection of high-precision medical equipment designed for ICU, OT, and critical care environments.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 relative z-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Category Filter */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-8 border border-gray-100 lg:sticky lg:top-28">
              <div className="mb-6 lg:mb-8">
                <h4 className="text-brand-navy font-heading font-bold text-lg mb-4 md:mb-6 flex items-center">
                  <Filter size={18} className="mr-2 text-brand-teal" />
                  Categories
                </h4>
                {/* Mobile Categories (Horizontal Scroll) */}
                <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 lg:space-y-2 no-scrollbar">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`whitespace-nowrap lg:whitespace-normal text-left px-4 lg:px-5 py-2.5 lg:py-3 rounded-xl text-xs lg:text-sm font-bold transition-all flex items-center justify-between group shrink-0 ${
                        activeCategory === cat 
                        ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/20' 
                        : 'bg-gray-50 lg:bg-transparent text-gray-500 hover:bg-brand-light hover:text-brand-navy border border-transparent lg:border-none'
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight size={14} className={`hidden lg:block transition-transform ${activeCategory === cat ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 lg:pt-8 border-t border-gray-100">
                <h4 className="text-brand-navy font-heading font-bold text-lg mb-4">Search</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Find equipment..." 
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-brand-teal/20 focus:bg-white outline-none rounded-xl px-5 py-3 text-sm transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-brand-teal/30 hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-500"
                  >
                    <div className="h-64 relative overflow-hidden bg-brand-light">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <span className="text-white text-xs font-bold tracking-widest uppercase bg-brand-teal px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">
                        {product.desc}
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <Link 
                          to={`/products/${product.slug}`}
                          className="flex-grow text-center py-4 rounded-2xl bg-brand-navy text-white font-bold text-xs hover:bg-brand-teal transition-all duration-300 shadow-lg shadow-brand-navy/10"
                        >
                          Details
                        </Link>
                        <a 
                          href={`https://wa.me/919112223296?text=I'm interested in ${product.name}`}
                          className="p-4 rounded-2xl bg-brand-orange/10 text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300"
                        >
                          <MessageCircle size={18} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-gray-100">
                <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search size={40} className="text-brand-teal" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-navy mb-4">No Equipment Found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any products matching your current filters. Try selecting another category or refining your search.
                </p>
                <button 
                  onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                  className="mt-8 text-brand-teal font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
