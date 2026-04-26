import React from 'react';
import ContactSection from '../components/home/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="bg-brand-navy py-20 text-white relative">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-extrabold mb-4">Contact <span className="text-brand-teal">Our Team</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Whether you need a quick quote for a single unit or a comprehensive equipment list for a new facility, we're here to help.
          </p>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Additional FAQ/Support info if needed */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 rounded-3xl bg-brand-light border border-brand-teal/10">
            <h4 className="font-heading font-bold text-xl text-brand-navy mb-4">Urgent AMC Support</h4>
            <p className="text-gray-500 mb-6">For existing AMC holders requiring breakdown assistance.</p>
            <p className="text-2xl font-heading font-extrabold text-brand-teal">+91 91122 23296</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-brand-light border border-brand-teal/10">
            <h4 className="font-heading font-bold text-xl text-brand-navy mb-4">Billing & GST</h4>
            <p className="text-gray-500 mb-6">For queries regarding invoices, payments, and GST documentation.</p>
            <p className="text-2xl font-heading font-extrabold text-brand-teal">accounts@auronixinfinia.com</p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-brand-light border border-brand-teal/10">
            <h4 className="font-heading font-bold text-xl text-brand-navy mb-4">Technical Demo</h4>
            <p className="text-gray-500 mb-6">Schedule a physical demo at your facility or our Pune office.</p>
            <p className="text-2xl font-heading font-extrabold text-brand-teal">Schedule via WhatsApp</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
