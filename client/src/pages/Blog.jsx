import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Clock, Tag, BookOpen, ChevronRight, Mail, ArrowUpRight } from 'lucide-react';
import { blogs as posts } from '../data/blogs';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = ['All', ...new Set(posts.map(p => p.category))];

  const categoryColors = {
    'Cold Chain': { bg: 'bg-blue-100', text: 'text-brand-teal', dot: 'bg-brand-teal' },
    'Blood Bank': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
    'Storage': { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
    'Compliance': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
    'Clinical': { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
    'Innovation': { bg: 'bg-indigo-100', text: 'text-indigo-700', dot: 'bg-indigo-500' },
  };

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts.find(p => p.featured);

  return (
    <div className="pt-20 bg-[#F9FBFC] min-h-screen">
      <AnimatePresence>
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-20 relative">
              <button 
                onClick={() => setSelectedPost(null)}
                className="fixed top-24 left-8 md:left-24 bg-brand-navy text-white p-4 rounded-full shadow-2xl hover:bg-brand-teal transition-all z-10"
              >
                <ArrowRight className="rotate-180" size={24} />
              </button>

              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-xs font-black uppercase tracking-widest">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={16} /> {selectedPost.date}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-heading font-black text-brand-navy mb-12 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                  <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                </div>

                <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-8">
                  <p className="text-2xl font-medium text-brand-navy/80 italic border-l-4 border-brand-teal pl-8 mb-12">
                    {selectedPost.excerpt}
                  </p>
                  
                  <h2 className="text-3xl font-heading font-bold text-brand-navy mt-16">Understanding the Core Requirements</h2>
                  <p>
                    In the rapidly evolving landscape of medical technology, staying compliant while maintaining operational efficiency is the cornerstone of any modern healthcare facility. This detailed guide explores the nuances of {selectedPost.category.toLowerCase()} and how {selectedPost.tags[0]} play a vital role in patient safety.
                  </p>

                  <div className="bg-blueprint p-10 rounded-[2rem] border border-gray-100 my-16">
                    <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                      <BookOpen className="text-brand-teal" /> Key Takeaways
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                      {["Equipment Precision", "Regulatory Compliance", "Patient-Centric Care", "Operational Stability"].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm font-bold text-brand-navy/70 uppercase tracking-widest">
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h2 className="text-3xl font-heading font-bold text-brand-navy">Implementation Strategy</h2>
                  <p>
                    Deploying these solutions requires a multi-faceted approach involving biomedical engineers, quality control departments, and frontline clinicians. By standardizing {selectedPost.tags[1]} and {selectedPost.tags[2]}, hospitals can significantly reduce downtime and improve outcomes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                    <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                      <div className="text-brand-teal font-black text-4xl mb-4">01</div>
                      <div className="font-bold text-brand-navy mb-2 uppercase text-xs tracking-widest">Assessment</div>
                      <p className="text-xs text-gray-500">Thorough evaluation of existing infrastructure.</p>
                    </div>
                    <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                      <div className="text-brand-teal font-black text-4xl mb-4">02</div>
                      <div className="font-bold text-brand-navy mb-2 uppercase text-xs tracking-widest">Integration</div>
                      <p className="text-xs text-gray-500">Seamless blending with existing hospital protocols.</p>
                    </div>
                    <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                      <div className="text-brand-teal font-black text-4xl mb-4">03</div>
                      <div className="font-bold text-brand-navy mb-2 uppercase text-xs tracking-widest">Optimization</div>
                      <p className="text-xs text-gray-500">Continuous monitoring and data-driven updates.</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-heading font-bold text-brand-navy text-center my-20">Auronix: Your Partner in Excellence</h2>
                </div>

                <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-xl">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{selectedPost.author}</div>
                      <div className="text-sm text-gray-400 font-medium uppercase tracking-widest">Expert Editorial Team</div>
                    </div>
                  </div>
                  <button className="bg-brand-teal text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-navy transition-all shadow-xl">
                    SHARE ARTICLE
                  </button>
                </div>
              </div>

              {/* Sidebar with Recent Blogs (Marken Style) */}
              <div className="max-w-4xl mx-auto mt-32">
                <h3 className="text-sm font-black uppercase tracking-[0.4em] text-brand-teal mb-10">You Might Also Like</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.filter(p => p.title !== selectedPost.title).slice(0, 2).map(p => (
                    <div 
                      key={p.title} 
                      className="group cursor-pointer"
                      onClick={() => {
                        setSelectedPost(p);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="aspect-video rounded-3xl overflow-hidden mb-4">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <h4 className="font-bold text-brand-navy group-hover:text-brand-teal transition-colors">{p.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* Header Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 rounded-full mb-6"
            >
              <BookOpen size={16} className="text-brand-teal" />
              <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em]">Resource Center</span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-heading font-black text-brand-navy mb-8 leading-[0.95]">
              Industry <span className="text-brand-teal">Insights</span> & Updates
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Stay updated with the latest in medical cold chain, laboratory standards, and clinical infrastructure innovations.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search technical guides or news..."
                  className="w-full pl-16 pr-6 py-5 bg-white border border-gray-100 rounded-[2rem] shadow-sm outline-none focus:border-brand-teal transition-all text-brand-navy text-lg"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-brand-navy text-white border-brand-navy shadow-lg'
                        : 'bg-white text-gray-500 border-gray-100 hover:border-brand-teal hover:text-brand-teal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      {featured && activeCategory === 'All' && !searchQuery && (
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative bg-white rounded-[4rem] overflow-hidden shadow-2xl border border-gray-50 grid lg:grid-cols-2 gap-0"
            >
              <div className="h-[400px] lg:h-[600px] overflow-hidden">
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 bg-brand-teal/10 text-brand-teal rounded-full text-[10px] font-black uppercase tracking-widest">
                    {featured.category}
                  </span>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> {featured.date}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-navy mb-8 leading-tight group-hover:text-brand-teal transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-xl leading-relaxed mb-12">
                  {featured.excerpt}
                </p>
                <button 
                  onClick={() => setSelectedPost(featured)}
                  className="self-start flex items-center justify-between w-full sm:w-auto sm:min-w-[260px] bg-brand-navy text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] group/btn transition-all duration-300 hover:bg-brand-teal shadow-2xl"
                >
                  <span>VIEW FULL REPORT</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Grid Section */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(26,122,138,0.12)] transition-all duration-700"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-xl text-[10px] font-black text-brand-navy uppercase tracking-widest shadow-xl border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-teal rounded-full" />
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-heading font-black text-brand-navy mb-6 group-hover:text-brand-teal transition-colors duration-500 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-10 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-8 border-t border-gray-50">
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center justify-between w-full bg-brand-navy text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] group/btn hover:bg-brand-teal transition-all duration-300 shadow-lg"
                    >
                      <span>VIEW ARTICLE</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        <ArrowUpRight size={14} />
                      </div>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Newsletter */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Never miss a <span className="text-brand-teal">Technical Update</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Get professional insights and regulatory updates from Auronix directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-brand-teal transition-all"
            />
            <button className="bg-brand-teal text-white font-black px-12 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-2xl">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
