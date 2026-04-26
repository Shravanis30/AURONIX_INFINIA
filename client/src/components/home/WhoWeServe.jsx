import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Home, MessageSquare } from 'lucide-react';

const buyers = [
  {
    title: "Clinics & Nursing Homes",
    icon: Building2,
    desc: "Optimized for 5–30 bed facilities. Fast WhatsApp quotes, upfront pricing, and local technical setup.",
    color: "brand-teal",
    message: "Hi, I'm a clinic owner interested in equipment pricing.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Multi-Specialty Hospitals",
    icon: Landmark,
    desc: "Scalable solutions for 50–500 bed hospitals. ISO compliance and NABH audit-ready documentation.",
    color: "brand-blue",
    message: "Hi, I'm from hospital procurement. Need bulk quote and datasheets.",
    image: "https://www.hospertz.com/wp-content/uploads/2024/07/gal1.jpg"
  },
  {
    title: "Home Care & Families",
    icon: Home,
    desc: "Post-discharge recovery management. Expert rent vs. buy consultation with same-day home setup.",
    color: "brand-green",
    message: "Hi, I need home care equipment consultation.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
  }
];

const WhoWeServe = () => {
  return (
    <section className="py-32 bg-[#F8FAFB] relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#1A7A8A 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-teal/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-teal rounded-full animate-pulse"></span>
              <span className="text-brand-teal text-[10px] font-bold uppercase tracking-widest">Our Ecosystem</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-extrabold text-brand-navy leading-[1.1]">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue">Every Healthcare Environment</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-brand-teal pl-6">
              "We understand the unique logistics and clinical demands of different healthcare scales."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {buyers.map((buyer, i) => (
            <motion.div
              key={buyer.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="group relative h-[600px] rounded-[3.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(26,122,138,0.15)] transition-all duration-700"
            >
              {/* Image Background with Complex Masking */}
              <div className="absolute inset-0 h-2/3 overflow-hidden">
                <img
                  src={buyer.image}
                  alt={buyer.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-transparent to-white" />
              </div>

              {/* Card Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl relative">
                  {/* Floating Icon */}
                  <div className="absolute -top-10 left-8 w-20 h-20 rounded-3xl bg-brand-navy text-white flex items-center justify-center shadow-2xl group-hover:bg-brand-teal group-hover:-translate-y-2 transition-all duration-500">
                    <buyer.icon size={32} />
                  </div>

                  <div className="pt-8">
                    <h3 className="text-2xl font-heading font-extrabold text-brand-navy mb-4 leading-tight">
                      {buyer.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-8">
                      {buyer.desc}
                    </p>

                    <a
                      href={`https://wa.me/919112223296?text=${encodeURIComponent(buyer.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full bg-brand-navy hover:bg-brand-teal text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 group/btn"
                    >
                      <span className="flex items-center gap-3">
                        <MessageSquare size={20} />
                        Consult Now
                      </span>
                      <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                        \u2192
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-8 right-8 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-full h-1 bg-white/30 rounded-full" />
                <div className="absolute top-0 right-0 h-full w-1 bg-white/30 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
