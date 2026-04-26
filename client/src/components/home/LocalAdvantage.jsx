import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Settings, PhoneCall, ArrowRight } from 'lucide-react';

const LocalAdvantage = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-lg mx-auto w-full"
        >
          <div className="absolute inset-0 bg-brand-light rounded-full scale-110 opacity-50"></div>
          
          <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
            {/* Concentric Circles */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="#E85D26" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#2BA8C5" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="#1A7A8A" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Center Node: Pune HQ */}
            <circle cx="200" cy="200" r="8" fill="#1A7A8A" />
            <motion.circle 
              cx="200" cy="200" r="12" 
              fill="none" stroke="#1A7A8A" 
              animate={{ r: [12, 20], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Area Labels */}
            {[
              { x: 140, y: 150, name: "Pimpri" },
              { x: 260, y: 180, name: "Hadapsar" },
              { x: 180, y: 280, name: "Kothrud" },
              { x: 240, y: 120, name: "Wakad" },
              { x: 160, y: 220, name: "Shivajinagar" },
            ].map((loc, i) => (
              <g key={i}>
                <circle cx={loc.x} cy={loc.y} r="4" fill="#2BA8C5" />
                <text x={loc.x + 8} y={loc.y + 4} className="text-[10px] font-bold fill-brand-navy/60 uppercase tracking-tighter">
                  {loc.name}
                </text>
              </g>
            ))}

            {/* Label Tags */}
            <foreignObject x="220" y="240" width="150" height="40">
              <div className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">
                48-Hour Guarantee
              </div>
            </foreignObject>
            <foreignObject x="40" y="100" width="150" height="40">
              <div className="bg-brand-teal text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">
                4-Hour AMC Response
              </div>
            </foreignObject>
          </svg>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-heading font-extrabold text-brand-navy">Pune's Home Team Advantage</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Medical emergencies don't wait for pan-India logistics. 
              We are based in <span className="font-bold text-brand-teal">Ghorphade Peth</span>, providing lightning-fast support to Pune and PCMC facilities.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { 
                icon: MapPin, 
                title: "Local Inventory", 
                desc: "We stock products in our Pune warehouse. 48-hour guaranteed delivery vs. 7 days from Mumbai/Delhi." 
              },
              { 
                icon: Settings, 
                title: "On-Site Installation", 
                desc: "Our engineers are in your city. We don't just drop off a box; we install, test, and train your staff." 
              },
              { 
                icon: PhoneCall, 
                title: "4-Hour Response", 
                desc: "Critical breakdown? Our AMC holders get on-site technician arrival within 4 hours. No exceptions." 
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-6 group"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-light text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors shadow-inner">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-brand-navy mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a 
            href="https://wa.me/919112223296?text=Check delivery to my pincode: "
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-brand-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-teal transition-all group"
          >
            <span>Check Delivery to Your Pincode</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocalAdvantage;
