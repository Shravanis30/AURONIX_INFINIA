import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-navy py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-heading font-extrabold mb-6"
          >
            About <span className="text-brand-teal">Auronix Infinia</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Founded with a mission to bridge the gap between high-end medical technology and local healthcare providers in Pune.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-brand-navy">Our Story</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                AURONIX INFINIA PVT LTD was established in Pune to solve a critical problem: the delay in medical equipment delivery and the lack of technical support for local hospitals.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                While large distributors focused on pan-India sales, smaller facilities in Pune were left with long lead times and generic support. We changed that by building a local inventory and a dedicated team of biomedical specialists.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-4xl font-heading font-extrabold text-brand-teal">2021</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Established</p>
                </div>
                <div>
                  <h4 className="text-4xl font-heading font-extrabold text-brand-teal">500+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Installations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-brand-light rounded-3xl aspect-video overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical Office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-brand-orange p-8 rounded-3xl text-white shadow-2xl hidden md:block">
                <p className="text-2xl font-heading font-bold">Pune's Local</p>
                <p className="text-lg opacity-80">Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-blueprint">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mb-8">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide life-critical medical equipment with guaranteed 48-hour delivery and professional on-site support to every healthcare facility in the Pune region.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-3xl shadow-xl"
          >
            <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-8">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the most trusted biomedical partner for hospitals in Western Maharashtra, known for technical precision and transparent service.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
