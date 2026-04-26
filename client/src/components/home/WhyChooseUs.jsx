import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Truck, ShieldCheck, Zap, ScrollText } from 'lucide-react';

const edges = [
  {
    title: "Personalised Expert Support",
    desc: "A named, dedicated biomedical specialist for your facility — not a generic call centre ticket.",
    icon: UserCheck,
    color: "brand-teal"
  },
  {
    title: "48-Hour Local Delivery",
    desc: "Guaranteed delivery within Pune & PCMC. Life-critical speed vs. 5–7 day pan-India lag.",
    icon: Truck,
    color: "brand-blue"
  },
  {
    title: "Direct Channel Pricing",
    desc: "Manufacturer-to-clinic supply. No platform commissions or multi-layer distributor margins.",
    icon: ShieldCheck,
    color: "brand-green"
  },
  {
    title: "On-Site Installation",
    desc: "Equipment installed, tested, and biomedical staff trained. We don't just drop off a box.",
    icon: Zap,
    color: "brand-green2"
  },
  {
    title: "Transparent AMC SLAs",
    desc: "Plain-language maintenance contracts with strict 4-hour response for local facilities.",
    icon: ScrollText,
    color: "brand-orange",
    highlight: true
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Technical Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 25, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-teal" />
          <path d="M0 60 Q 25 35, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-blue" />
        </svg>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-brand-teal"></div>
              <span className="text-brand-teal text-xs font-bold uppercase tracking-[0.4em]">The Auronix Advantage</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-brand-navy leading-tight">
              The 5 Pillars of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Auronix Excellence</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm lg:text-right"
          >
            <p className="text-gray-500 text-xl leading-relaxed italic">
              "Why Pune's top clinics and hospitals choose us as their long-term equipment partner."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edges.map((edge, i) => (
            <motion.div
              key={edge.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`group relative p-10 bg-white rounded-[3rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(26,122,138,0.12)] transition-all duration-700 ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Card Accent Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />

              {/* Number Index */}
              <div className="flex items-center justify-between mb-10">
                <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center bg-brand-navy text-white shadow-xl shadow-brand-navy/10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:bg-brand-teal">
                  <edge.icon size={28} />
                </div>
                <span className="text-4xl font-heading font-black text-gray-100 group-hover:text-brand-teal/20 transition-colors duration-500">
                  0{i + 1}
                </span>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-extrabold text-brand-navy mb-5 group-hover:text-brand-teal transition-colors duration-500 leading-snug">
                  {edge.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-500">
                  {edge.desc}
                </p>
              </div>

              {/* Interactive Decoration */}
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-gray-50 group-hover:border-brand-teal/30 transition-colors duration-500 rounded-br-2xl" />
              
              {/* Reveal Line on Hover */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-brand-teal rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
              />
            </motion.div>
          ))}

          {/* Special "Partner With Us" Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 mt-12 bg-brand-navy rounded-[3rem] p-12 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute inset-0 bg-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">Ready to experience the Auronix Edge?</h3>
              <p className="text-gray-400 text-lg">Partner with Pune's most reliable medical equipment distributor.</p>
            </div>
            <a 
              href="/contact"
              className="relative z-10 px-10 py-5 bg-brand-teal text-white font-bold rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-xl shadow-brand-teal/20"
            >
              Get a Free Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
