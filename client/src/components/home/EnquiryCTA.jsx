import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const EnquiryCTA = () => {
  return (
    <section className="bg-brand-orange py-10 relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 text-white">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-2">Need a Quote in 15 Minutes?</h2>
          <p className="text-white/80 font-medium">WhatsApp our team directly. We respond with price band, delivery date, and datasheet.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="text-center sm:text-right hidden sm:block">
            <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Call Directly</p>
            <p className="text-xl font-heading font-bold">+91 91122 23296</p>
          </div>
          <a 
            href="https://wa.me/919112223296?text=Hi, I need a quick quote for..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange px-10 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center space-x-3 hover:scale-105 transition-transform"
          >
            <MessageSquare size={24} />
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquiryCTA;
