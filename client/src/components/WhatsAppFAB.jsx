import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFAB = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] flex flex-col items-center space-y-3 md:space-y-4">
      {/* Back to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-white text-brand-navy shadow-2xl rounded-full flex items-center justify-center hover:bg-brand-light transition-colors border border-gray-100"
          >
            <ArrowUp size={20} className="md:w-6 md:h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Phone FAB */}
      <a
        href="tel:+919112223296"
        className="w-12 h-12 md:w-14 md:h-14 bg-brand-teal text-white shadow-2xl rounded-full flex items-center justify-center hover:scale-110 transition-transform relative"
      >
        <Phone size={20} className="md:w-6 md:h-6" />
      </a>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919112223296?text=Hi, I need a quote for medical equipment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 bg-brand-green text-white shadow-2xl rounded-full flex items-center justify-center hover:scale-110 transition-transform relative group"
      >
        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20 pointer-events-none"></div>
        <MessageCircle size={28} className="md:w-8 md:h-8" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-brand-navy text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </div>
      </a>
    </div>
  );
};

export default WhatsAppFAB;
