import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Clock, Tag, BookOpen, ChevronRight, Mail } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: "BiPAP vs CPAP: Choosing the Right Respiratory Support for Your ICU",
      category: "Technical Guide",
      excerpt: "Understanding the pressure dynamics and patient synchronization required for critical respiratory care in modern ICUs.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=900",
      date: "May 15, 2024",
      author: "Biomedical Team",
      readTime: "6 min read",
      featured: true,
      tags: ["Respiratory", "ICU", "Ventilators"],
    },
    {
      title: "NABH Audit Checklist: Equipment Documentation Your Hospital Needs",
      category: "Compliance",
      excerpt: "Ensure your facility is ready for accreditation with proper Form MD-15 and maintenance logs.",
      image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=900",
      date: "June 02, 2024",
      author: "Quality Dept",
      readTime: "8 min read",
      tags: ["NABH", "Compliance", "Documentation"],
    },
    {
      title: "Rent vs. Buy Medical Equipment: A Financial Guide for Home Care",
      category: "Home Care",
      excerpt: "A breakdown of long-term costs for oxygen concentrators and patient beds in post-discharge care.",
      image: "https://images.unsplash.com/photo-1576765608598-13201402867d?auto=format&fit=crop&q=80&w=900",
      date: "July 10, 2024",
      author: "Consultancy Team",
      readTime: "5 min read",
      tags: ["Home Care", "Finance", "Oxygen"],
    },
    {
      title: "Maintaining ICU Ventilators: Best Practices for Biomedical Engineers",
      category: "Maintenance",
      excerpt: "Weekly, monthly, and quarterly checklists to prevent critical failures in high-pressure environments.",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=900",
      date: "August 20, 2024",
      author: "Service Team",
      readTime: "7 min read",
      tags: ["Ventilators", "Maintenance", "Biomedical"],
    },
    {
      title: "Patient Monitoring Systems: What Every Nurse Should Know",
      category: "Technical Guide",
      excerpt: "From SpO2 sensors to invasive pressure lines — a nurse-friendly guide to bedside monitors.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=900",
      date: "September 05, 2024",
      author: "Clinical Team",
      readTime: "4 min read",
      tags: ["Monitoring", "Clinical", "Nursing"],
    },
    {
      title: "OT Table Selection Guide: Electro-Hydraulic vs Mechanical for Tier-2 Hospitals",
      category: "Technical Guide",
      excerpt: "A comparison of OT table types for varied surgical specialties, budget constraints, and maintenance ease.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=900",
      date: "October 12, 2024",
      author: "Biomedical Team",
      readTime: "9 min read",
      tags: ["OT", "Surgical", "Equipment"],
    },
    {
      title: "How to Write an Effective AMC Proposal for Government Hospitals",
      category: "Compliance",
      excerpt: "Winning Annual Maintenance Contracts requires more than pricing — here's what decision-makers look for.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=900",
      date: "November 01, 2024",
      author: "Sales & Compliance",
      readTime: "6 min read",
      tags: ["AMC", "Government", "Sales"],
    },
    {
      title: "Infusion Pump Calibration: Step-by-Step Field Guide",
      category: "Maintenance",
      excerpt: "Proper calibration procedures for syringe and volumetric pumps to ensure accurate drug delivery.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=900",
      date: "December 08, 2024",
      author: "Service Team",
      readTime: "5 min read",
      tags: ["Infusion", "Calibration", "Drug Safety"],
    },
    {
      title: "Top 5 Red Flags During Medical Equipment Procurement",
      category: "Home Care",
      excerpt: "Avoid costly mistakes and counterfeit devices — what hospitals and home care buyers must verify before purchase.",
      image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=900",
      date: "January 18, 2025",
      author: "Consultancy Team",
      readTime: "4 min read",
      tags: ["Procurement", "Quality", "Buyer Guide"],
    },
  ];

  const categories = ['All', ...new Set(posts.map(p => p.category))];

  const categoryColors = {
    'Technical Guide': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
    'Compliance': { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
    'Home Care': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
    'Maintenance': { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
  };

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  }).filter(p => !p.featured || activeCategory !== 'All' || searchQuery);

  const featured = posts.find(p => p.featured);

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-blueprint py-28 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute -top-10 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-brand-teal/20">
              <BookOpen size={14} /> Knowledge Hub
            </span>
            <h1 className="text-6xl font-heading font-extrabold text-brand-navy mb-6 leading-tight">
              Knowledge <span className="text-brand-teal">Resources</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
              Deep-dives into medical technology, compliance standards, maintenance protocols, and healthcare operational efficiency.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex items-center border border-gray-100">
              <Search className="text-gray-400 ml-4 shrink-0" size={20} />
              <input
                type="text"
                placeholder="Search articles, guides, or topics..."
                className="flex-grow px-4 py-3 outline-none text-brand-navy placeholder-gray-400 bg-transparent"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-brand-navy px-3 text-lg">&times;</button>
              )}
              <button className="bg-brand-teal hover:bg-brand-navy text-white px-7 py-3 rounded-xl font-bold transition-colors shrink-0">
                Search
              </button>
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {categories.map(cat => {
              const c = categoryColors[cat];
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setSearchQuery(''); }}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeCategory === cat
                      ? 'bg-brand-teal text-white border-brand-teal shadow-lg scale-105'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-brand-teal hover:text-brand-teal'
                  }`}
                >
                  {cat === 'All' ? 'All Articles' : cat}
                  <span className="ml-1.5 opacity-60 text-xs">
                    ({cat === 'All' ? posts.length : posts.filter(p => p.category === cat).length})
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Post — only shown on 'All' with no search */}
      <AnimatePresence>
        {activeCategory === 'All' && !searchQuery && featured && (
          <motion.section
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="py-16"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-8 bg-brand-teal rounded-full" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand-teal">Featured Article</h2>
              </div>
              <motion.div
                className="group grid lg:grid-cols-2 gap-0 bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', damping: 20 }}
              >
                <div className="h-[350px] lg:h-full relative overflow-hidden">
                  <img src={featured.image} alt="featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-8 left-8 bg-brand-orange text-white px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest shadow-lg">
                    Featured Article
                  </div>
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {(() => { const c = categoryColors[featured.category]; return (
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c.bg} ${c.text}`}>
                        {featured.category}
                      </span>
                    ); })()}
                    <span className="flex items-center gap-1.5 text-gray-400 text-xs"><Clock size={12} />{featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold uppercase tracking-wider mb-5">
                    <span className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><User size={13} />{featured.author}</span>
                  </div>
                  <h2 className="text-3xl font-heading font-extrabold text-brand-navy mb-5 leading-tight group-hover:text-brand-teal transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8">{featured.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full border border-gray-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="self-start flex items-center gap-3 bg-brand-teal hover:bg-brand-navy text-white font-bold px-7 py-3 rounded-xl transition-all duration-300 group/btn shadow-lg">
                    <span>Read Full Article</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Article Grid */}
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto px-4 pt-16">
          {/* Section Label */}
          {activeCategory === 'All' && !searchQuery && (
            <div className="flex items-center gap-3 mb-10">
              <div className="h-1 w-8 bg-brand-teal rounded-full" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-teal">More Articles</h2>
            </div>
          )}
          {(activeCategory !== 'All' || searchQuery) && (
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="h-1 w-8 bg-brand-teal rounded-full" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-brand-teal">
                  {searchQuery ? `Results for "${searchQuery}"` : activeCategory}
                  <span className="ml-2 text-gray-400 normal-case">({(activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)).filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())).length} articles)</span>
                </h2>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filtered.map((post, i) => {
                  const c = categoryColors[post.category];
                  return (
                    <motion.article
                      key={post.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer flex flex-col"
                    >
                      {/* Image */}
                      <div className="h-56 overflow-hidden relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 left-4">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${c.bg} ${c.text}`}>
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Clock size={10} /> {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-1.5"><Calendar size={11} />{post.date}</span>
                          <span className="flex items-center gap-1.5"><User size={11} />{post.author}</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-brand-navy group-hover:text-brand-teal transition-colors leading-snug mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2 flex-grow">
                          {post.excerpt}
                        </p>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Tag size={8} /> {tag}
                            </span>
                          ))}
                        </div>
                        <button className="flex items-center gap-2 text-brand-navy hover:text-brand-teal font-bold text-sm uppercase tracking-widest transition-colors mt-auto group/btn">
                          <span>Read Article</span>
                          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 text-gray-400">
                <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-semibold">No articles found</p>
                <p className="text-sm mt-2">Try a different search term or category</p>
                <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-6 px-6 py-3 bg-brand-teal text-white rounded-xl font-bold hover:bg-brand-navy transition-colors">
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,122,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,138,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-16 h-16 bg-brand-teal/10 border border-brand-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Mail size={28} className="text-brand-teal" />
            </div>
            <h2 className="text-4xl font-heading font-extrabold text-brand-navy mb-4">
              Stay Ahead in <span className="text-brand-teal">MedTech</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Get the latest biomedical insights, compliance updates, and technical guides delivered directly to your inbox — no spam, ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your professional email"
                className="flex-grow px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-brand-navy placeholder-gray-400 outline-none focus:border-brand-teal transition-colors"
              />
              <button className="bg-brand-teal hover:bg-brand-navy text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-brand-teal/20">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 font-medium">Join 500+ biomedical professionals. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
