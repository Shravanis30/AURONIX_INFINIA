import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck, Truck, Settings, Clock } from 'lucide-react';

const instrumentImages = [
  { src: "/images/products/icu-ventilator.png", name: "ICU Ventilator" },
  { src: "/images/products/patient-monitor.png", name: "Patient Monitor" },
  { src: "/images/products/surgical-light.png", name: "Surgical LED Light" },
  { src: "/images/products/ult-freezer.png", name: "ULT Deep Freezer" },
  { src: "/images/products/anesthesia-workstation.png", name: "Anesthesia Workstation" },
  { src: "/images/products/hfnc-system.png", name: "HFNC System" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % instrumentImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 bg-blueprint overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-brand-teal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-orange opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full font-bold text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span>Pune's Specialist Medical Equipment Partner</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-brand-navy leading-[1.1] md:leading-tight">
            Every Product We Stock, <br className="hidden md:block" />
            <span className="text-brand-teal"> We Can Support.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Deep expertise in ICU, OT & Respiratory equipment. 
            <span className="font-bold text-brand-navy"> Pune delivery in 48 hrs.</span> On-site installation included with every purchase.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://wa.me/919112223296" 
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-orange/20 flex items-center justify-center space-x-3 transition-all hover:scale-105"
            >
              <MessageSquare size={20} />
              <span>WhatsApp Quote</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="/products" 
              className="w-full sm:w-auto bg-white hover:bg-brand-light text-brand-navy border-2 border-brand-navy/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
            >
              Explore Products
            </a>
          </div>

          {/* Trust Bar */}
          <div className="pt-8 grid grid-cols-2 md:flex md:items-center gap-4 md:gap-8 border-t border-gray-200">
            {[
              { icon: ShieldCheck, text: "ISO 13485 Certified" },
              { icon: Settings, text: "CDSCO Compliant" },
              { icon: Truck, text: "48-Hr Delivery" },
              { icon: Clock, text: "On-Site Setup" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-sm font-semibold text-gray-500">
                <item.icon size={18} className="text-brand-teal" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Instrument Slideshow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-full blur-[100px] animate-pulse"></div>
            
            {/* Image Carousel */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img 
                    src={instrumentImages[currentImage].src} 
                    alt={instrumentImages[currentImage].name}
                    className="max-w-full max-h-[80%] object-contain drop-shadow-[0_20px_50px_rgba(26,122,138,0.3)]"
                  />
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-brand-navy font-heading font-bold text-xl bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20 shadow-sm"
                  >
                    {instrumentImages[currentImage].name}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stat Cards - Adjusted Z-Index and Position */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 md:top-10 right-0 md:-right-4 glass shadow-2xl p-3 md:p-4 rounded-2xl border-l-4 border-brand-teal z-20 scale-75 md:scale-100"
            >
              <p className="text-brand-teal font-bold text-[10px] md:text-xs uppercase tracking-widest">4-Hr Response</p>
              <p className="text-brand-navy font-extrabold text-sm md:text-lg">AMC Support</p>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-4 md:bottom-10 left-0 md:-left-4 bg-white p-3 md:p-4 rounded-2xl shadow-2xl border-l-4 border-brand-orange z-20 scale-75 md:scale-100"
            >
              <p className="text-brand-orange font-bold text-[10px] md:text-xs uppercase tracking-widest">48-Hr Delivery</p>
              <p className="text-brand-navy font-extrabold text-sm md:text-lg">Pune & PCMC</p>
            </motion.div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {instrumentImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentImage ? 'w-6 bg-brand-teal' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
