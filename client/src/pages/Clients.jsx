import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Quote } from 'lucide-react';

const Clients = () => {
  const partners = [
    { name: "Noble Hospital", location: "Hadapsar, Pune", size: "250+ Beds" },
    { name: "Sahyadri Hospitals", location: "Deccan, Pune", size: "Multiple Facilities" },
    { name: "Inamdar Multispecialty", location: "Fatima Nagar, Pune", size: "120+ Beds" },
    { name: "Ruby Hall Clinic", location: "Wanowrie, Pune", size: "Specialized ICU" },
    { name: "Local Life Clinics", location: "Pimpri-Chinchwad", size: "Chain of Clinics" },
    { name: "VitalCare Home Health", location: "Baner, Pune", size: "Home Care Partner" },
  ];

  return (
    <div className="pt-20">
      <section className="bg-blueprint py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-heading font-extrabold text-brand-navy mb-6">Trusted by Pune's <br /><span className="text-brand-teal">Leading Facilities</span></h1>
            <p className="text-xl text-gray-500">From 500-bed multispecialty hospitals to private home-care families, we deliver the same precision and speed.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-brand-light rounded-3xl border border-transparent hover:border-brand-teal transition-all flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="text-brand-teal" size={32} />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-navy mb-2">{partner.name}</h3>
                <p className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-1">{partner.location}</p>
                <p className="text-xs text-gray-400">{partner.size}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold">What Healthcare Leaders Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "Auronix's 4-hour response time isn't just a marketing claim. When our ICU ventilator had a sensor issue at 2 AM, their technician was on-site by 5 AM. That level of commitment is rare in the medical industry.",
                author: "Dr. Sandeep K.",
                role: "Director, ICU Dept"
              },
              {
                text: "We used to wait 7 days for spares from Mumbai. With Auronix being local in Ghorphade Peth, we get delivery within 24 hours. Their direct-channel pricing saved us 15% on our OT equipment procurement.",
                author: "Mr. Amit P.",
                role: "Procurement Officer"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 p-12 rounded-[40px] relative">
                <Quote className="text-brand-teal absolute top-10 left-10 opacity-20" size={60} />
                <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-heading font-bold text-brand-teal">{t.author}</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
