import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden pt-20 pb-10">
      {/* Decorative DNA Helix SVG Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 1000" className="w-full h-full">
          <path d="M30 0 Q70 100 30 200 Q70 300 30 400 Q70 500 30 600 Q70 700 30 800 Q70 900 30 1000" stroke="white" strokeWidth="2" fill="none" />
          <path d="M70 0 Q30 100 70 200 Q30 300 70 400 Q30 500 70 600 Q30 700 70 800 Q30 900 70 1000" stroke="white" strokeWidth="2" fill="none" />
          {[...Array(20)].map((_, i) => (
            <line key={i} x1="30" y1={i * 50 + 25} x2="70" y2={i * 50 + 25} stroke="white" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Auronix Infinia"
                className="h-16 w-auto object-contain brightness-125"
                style={{ filter: 'url(#remove-white)' }}
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Pune's specialist medical equipment partner. Deep expertise in ICU, OT & Respiratory equipment. Professional support since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/auronix_infinia" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-lg hover:bg-brand-teal transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:info@auronixinfinia.com" className="bg-white/10 p-2 rounded-lg hover:bg-brand-teal transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 border-b border-brand-teal/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Products', 'Certifications', 'Clients', 'Gallery', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-teal transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 border-b border-brand-teal/30 pb-2 inline-block">Categories</h4>
            <ul className="space-y-3">
              {['ICU Equipment', 'OT Equipment', 'Respiratory Care', 'Hospital Furniture', 'Consumables'].map(cat => (
                <li key={cat}>
                  <Link to="/products" className="text-gray-400 hover:text-brand-teal transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 border-b border-brand-teal/30 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="text-brand-teal shrink-0 mt-1" size={18} />
                <span>401 Athrava Jaytu, New Timber Merchant Society, Ghorphade Peth, Pune - 411042</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="text-brand-teal shrink-0" size={18} />
                <span>+91 91122 23296</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="text-brand-teal shrink-0" size={18} />
                <span>info@auronixinfinia.com</span>
              </div>
              <a 
                href="https://wa.me/919112223296" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green/90 text-white py-3 rounded-xl font-bold transition-all"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Auronix Infinia Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>GST No: [Your GST No]</span>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
