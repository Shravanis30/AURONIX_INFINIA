import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "BiPAP vs CPAP: Choosing the Right Respiratory Support for Your ICU",
    category: "Technical Guide",
    excerpt: "Understanding the pressure dynamics and patient synchronization required for critical respiratory care.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
    date: "May 15, 2024"
  },
  {
    title: "NABH Audit Checklist: Equipment Documentation Your Hospital Needs",
    category: "Compliance",
    excerpt: "Ensure your facility is ready for accreditation with proper Form MD-15 and maintenance logs.",
    image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=400",
    date: "June 02, 2024"
  },
  {
    title: "Rent vs. Buy Medical Equipment: A Financial Guide for Home Care",
    category: "Home Care",
    excerpt: "A breakdown of long-term costs for oxygen concentrators and patient beds in post-discharge care.",
    image: "https://images.unsplash.com/photo-1576765608598-13201402867d?auto=format&fit=crop&q=80&w=400",
    date: "July 10, 2024"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-px w-16 bg-brand-teal"></span>
              <span className="text-brand-teal text-xs font-black uppercase tracking-[0.4em]">Expert Insights</span>
            </motion.div>
            <h2 className="text-6xl md:text-7xl font-heading font-black text-brand-navy leading-[0.95] tracking-tighter">
              Latest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue italic">Resources</span>
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/blog" className="group relative inline-flex items-center gap-6 bg-brand-navy text-white px-12 py-6 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-brand-teal/30">
              <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-sm font-black uppercase tracking-widest">Access the Knowledge Hub</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(26,122,138,0.18)] transition-all duration-1000"
            >
              {/* Image Container with Reveal */}
              <div className="relative h-[320px] overflow-hidden shrink-0">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-700" />
                
                {/* Category Floating Badge */}
                <div className="absolute top-8 left-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-teal blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                    <span className="relative bg-white/90 backdrop-blur-md px-6 py-2 rounded-xl text-[10px] font-black text-brand-navy uppercase tracking-[0.2em] shadow-xl inline-block border border-white/50">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-12 flex flex-col flex-grow relative bg-white">
                <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  <span className="w-1 h-1 bg-brand-teal rounded-full" />
                  <span>{blog.date}</span>
                </div>
                
                <h3 className="text-2xl font-heading font-black text-brand-navy mb-6 group-hover:text-brand-teal transition-colors duration-500 line-clamp-2 leading-[1.1] tracking-tight">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-10 line-clamp-3 text-base">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-gray-50">
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center gap-4 text-brand-navy font-black text-[11px] uppercase tracking-[0.3em] group/link"
                  >
                    <span className="group-hover/link:text-brand-teal transition-colors">Full Report</span>
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover/link:bg-brand-navy group-hover/link:border-brand-navy group-hover/link:text-white transition-all duration-300">
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
