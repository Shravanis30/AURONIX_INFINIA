import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Counter = ({ value, label, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.toString().replace(/\D/g, ''));
      const duration = 2;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-brand-teal mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-white/70 font-medium uppercase tracking-widest text-xs md:text-sm">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { value: "500", label: "Hospitals Served", suffix: "+" },
    { value: "3", label: "Specializations", suffix: "" },
    { value: "48", label: "Pune Delivery", suffix: "hrs" },
    { value: "4", label: "AMC Response", suffix: "hrs" },
    { value: "100", label: "On-Site Setup", suffix: "%" },
  ];

  return (
    <section className="bg-brand-navy py-12 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1A7A8A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 md:gap-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <Counter 
              key={i} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
