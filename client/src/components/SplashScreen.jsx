import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600); // wait for exit animation
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #F0F9FB 0%, #FFFFFF 50%, #F0F9FB 100%)',
          }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-[0.2] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(26,122,138,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,138,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />

          {/* Glow rings */}
          <motion.div
            className="absolute rounded-full border border-brand-teal/5"
            initial={{ width: 200, height: 200, opacity: 0 }}
            animate={{ width: 400, height: 400, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ background: 'radial-gradient(circle, rgba(26,122,138,0.05) 0%, transparent 70%)' }}
          />
          <motion.div
            className="absolute rounded-full"
            initial={{ width: 100, height: 100, opacity: 0 }}
            animate={{ width: 600, height: 600, opacity: 0.3 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{ background: 'radial-gradient(circle, rgba(26,122,138,0.02) 0%, transparent 70%)' }}
          />

          {/* Logo container */}
          <div className="relative flex flex-col items-center">
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'radial-gradient(circle, rgba(26,122,138,0.2) 0%, transparent 70%)',
                width: 200,
                height: 200,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            {/* Logo image */}
            <motion.img
              src="/images/logo.png"
              alt="Auronix Infinia"
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-96 h-auto object-contain relative z-10 drop-shadow-2xl"
              style={{ filter: 'url(#remove-white)' }}
            />

            {/* Loading bar */}
            <motion.div
              className="mt-10 w-48 h-0.5 bg-brand-teal/10 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                style={{ background: 'linear-gradient(90deg, #1A7A8A, #2BA8C5, #5BBD4E)' }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-5 text-brand-teal text-xs font-semibold tracking-[0.3em] uppercase"
            >
              Empowering Healthcare
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
