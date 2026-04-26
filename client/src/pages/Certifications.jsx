import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Award, Lock, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "ISO 13485:2016",
      issuer: "Global Quality Standards",
      desc: "Specific requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services.",
      id: "CERT-13485-9921",
      icon: ShieldCheck
    },
    {
      title: "CDSCO Form MD-15",
      issuer: "Central Drugs Standard Control Organisation",
      desc: "Mandatory license for importing medical devices in India, ensuring every device meets safety and performance standards.",
      id: "REG-MD-15-PUNE-042",
      icon: FileCheck
    },
    {
      title: "CE Compliance",
      issuer: "European Conformity",
      desc: "Certified for health, safety, and environmental protection standards for products sold within the European Economic Area.",
      id: "EC-COMP-2024",
      icon: Award
    },
    {
      title: "BIS Certification",
      issuer: "Bureau of Indian Standards",
      desc: "Quality assurance and reliability for healthcare equipment manufactured or sold in the Indian market.",
      id: "IS-13450-2021",
      icon: Lock
    }
  ];

  return (
    <div className="pt-20 bg-blueprint">
      <section className="bg-brand-navy py-20 text-white relative">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-extrabold mb-6"
          >
            Compliance & <span className="text-brand-teal">Certifications</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            In the medical industry, trust is built on verifiable standards. Every product we supply is backed by international and national certifications.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-brand-teal/5 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 border border-gray-100 group hover:border-brand-teal transition-all"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-brand-light text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <cert.icon size={32} />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-brand-navy">{cert.title}</h3>
                    <p className="text-brand-teal font-bold text-sm uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-500 leading-relaxed">{cert.desc}</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400">ID: {cert.id}</span>
                    <div className="flex items-center space-x-2 text-brand-green font-bold text-xs uppercase">
                      <CheckCircle2 size={14} />
                      <span>Verified Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-brand-navy rounded-[40px] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 blur-[100px] pointer-events-none"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">Why Compliance Matters</h2>
                <p className="text-gray-400 text-lg">
                  NABH audits and healthcare regulations require strict documentation. Auronix Infinia provides full Form MD-15 chains and warranty logs with every SKU, ensuring your facility remains audit-ready 365 days a year.
                </p>
                <ul className="space-y-4">
                  {[
                    "Form MD-15 Import License chains provided",
                    "Installation Reports with Biomedical signatures",
                    "AMC contracts with defined technical SLAs",
                    "Transparent GST-compliant invoicing"
                  ].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-brand-teal font-bold">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="font-heading font-bold text-xl mb-6 text-center">Standard SLA Terms</h4>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-400">Technical Breakdown Response</span>
                    <span className="font-bold text-brand-orange">4 Hours</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-400">Spare Parts Availability</span>
                    <span className="font-bold">Guaranteed</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-400">Biomedical Training Sessions</span>
                    <span className="font-bold">Unlimited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
