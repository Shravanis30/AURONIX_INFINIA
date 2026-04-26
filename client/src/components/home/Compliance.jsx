import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, FileCheck, Globe, Scale, BadgeCheck } from 'lucide-react';

const certs = [
  { name: "ISO 13485:2016", desc: "Medical Devices QMS", icon: ShieldCheck },
  { name: "ISO 9001:2015", desc: "Quality Management System", icon: BadgeCheck },
  { name: "CE Marked", desc: "European Standards Compliance", icon: Globe },
  { name: "CDSCO Registered", desc: "Form MD-15 Verified", icon: FileCheck },
  { name: "GST Compliant", desc: "Transparent Billing", icon: Scale },
  { name: "BIS Certified", desc: "Bureau of Indian Standards", icon: CheckCircle2 },
];

const Compliance = () => {
  return (
    <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#2BA8C5 1px, transparent 1px), linear-gradient(90deg, #2BA8C5 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brand-teal/20 text-brand-teal text-[10px] font-bold uppercase tracking-[0.4em] px-4 py-2 rounded-lg mb-6 border border-brand-teal/30"
            >
              Industry Accreditation
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 md:mb-8 leading-tight">
              Compliance You <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Can Audit</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              Every device sourced through CDSCO-registered channels. 
              <span className="text-brand-teal font-bold"> ISO 13485 supplier verification</span> on every SKU. 
              Strict quality control at every stage.
            </p>
          </div>
          
          <div className="shrink-0">
            <div className="w-32 h-32 rounded-full border-4 border-brand-teal/10 flex items-center justify-center relative group">
              <div className="absolute inset-0 rounded-full border-4 border-brand-teal border-t-transparent animate-spin-slow group-hover:animate-spin transition-all" />
              <ShieldCheck size={48} className="text-brand-teal" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: '#2BA8C5' }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col items-center text-center group transition-all backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-brand-teal transition-all duration-500 shadow-inner">
                <cert.icon className="text-brand-teal group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="font-heading font-bold text-sm mb-2 text-white">{cert.name}</h4>
              <p className="text-[9px] uppercase tracking-widest text-gray-500 leading-tight">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "All devices come with mandatory CDSCO Form MD-15 documentation.",
            "Warranty documentation provided with every unit. No exceptions.",
            "AMC contracts include clear SLA penalties for complete peace of mind."
          ].map((text, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="flex items-start gap-4 md:gap-5 bg-white/[0.03] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 hover:bg-white/[0.05] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-brand-teal" size={20} />
              </div>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compliance;
