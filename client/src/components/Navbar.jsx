import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: [
        { 
          category: 'Medical Cold Chain', 
          items: [
            { name: 'Walk In Freezer', slug: 'walk-in-freezer-marken' },
            { name: 'ULT Freezer -86\u00b0', slug: 'ult-deep-freezer-86' },
            { name: 'Ice Lined Refrigerator', slug: 'ice-lined-refrigerator' },
            { name: 'Refrigerated Truck & Van', slug: 'refrigerated-truck-van' }
          ]
        },
        { 
          category: 'Blood Bank Equipment', 
          items: [
            { name: 'Blood Collection Monitor', slug: 'blood-collection-monitor' },
            { name: 'Blood Bank Refrigerator', slug: 'blood-bank-refrigerator' },
            { name: 'Refrigerated Centrifuge', slug: 'refrigerated-centrifuge' },
            { name: 'Blood Bag Tube sealer', slug: 'blood-bag-tube-sealer' }
          ]
        },
        { 
          category: 'Hospital Infra & Solutions', 
          items: [
            { name: 'Medical Equipment', slug: 'medical-equipment-general' },
            { name: 'Modular OT', slug: 'modular-ot-system' },
            { name: 'Hospital Furniture', slug: 'hospital-furniture-range' },
            { name: 'Medical Gas Pipeline System', slug: 'medical-gas-pipeline' }
          ]
        }
      ]
    },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Clients', path: '/clients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null);
    else setActiveDropdown(name);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'h-24 glass shadow-lg' : 'h-32 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Auronix Infinia Pvt. Ltd."
            className={`${scrolled ? 'h-14 lg:h-18' : 'h-18 lg:h-26'} w-auto object-contain transition-all duration-300`}
            style={{ filter: 'url(#remove-white)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button 
                  onClick={() => toggleDropdown(link.name)}
                  className={`flex items-center space-x-1 font-medium transition-colors ${
                    location.pathname.startsWith(link.path) ? 'text-brand-teal' : 'text-brand-navy hover:text-brand-teal'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={link.path}
                  className={`font-medium transition-colors relative ${
                    location.pathname === link.path ? 'text-brand-teal' : 'text-brand-navy hover:text-brand-teal'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-teal"
                    />
                  )}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-[850px] -translate-x-1/3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white shadow-2xl rounded-xl p-6 grid grid-cols-3 gap-6 border-t-4 border-brand-teal">
                    {link.dropdown.map((section) => (
                      <div key={section.category}>
                        <Link 
                          to={`/products?category=${encodeURIComponent(section.category)}`}
                          className="font-heading font-bold text-brand-teal text-sm mb-3 uppercase tracking-wider block hover:underline"
                        >
                          {section.category}
                        </Link>
                        <ul className="space-y-2 border-t border-gray-100 pt-3">
                          {section.items.map((item) => (
                            <li key={item.name} className="flex items-center space-x-2 group/item">
                              <span className="w-1 h-1 bg-brand-teal/30 rounded-full group-hover/item:bg-brand-teal transition-colors" />
                              <Link 
                                to={`/products/${item.slug}`}
                                className="text-sm text-gray-600 hover:text-brand-teal transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          <li className="pt-2">
                            <Link 
                              to={`/products?category=${encodeURIComponent(section.category)}`}
                              className="text-xs font-bold text-brand-teal hover:text-brand-orange transition-colors flex items-center space-x-1"
                            >
                              <span>View All</span>
                              <span className="text-[10px] text-brand-orange">↗</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            to="/contact"
            className="bg-brand-orange text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Get Quote</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 lg:hidden overflow-y-auto bg-white transition-all duration-300 ${
              scrolled ? 'pt-24' : 'pt-32'
            }`}
          >
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-2">
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full font-heading font-bold text-xl text-brand-navy"
                      >
                        {link.name}
                        <ChevronDown className={`${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden bg-brand-light mt-2 rounded-lg"
                          >
                            {link.dropdown.map((section) => (
                              <div key={section.category} className="p-4">
                                <Link 
                                  to={`/products?category=${encodeURIComponent(section.category)}`}
                                  className="font-bold text-brand-teal text-sm uppercase mb-3 block"
                                >
                                  {section.category}
                                </Link>
                                <ul className="space-y-3 pl-2">
                                  {section.items.map(item => (
                                    <li key={item.name}>
                                      <Link to={`/products/${item.slug}`} className="text-gray-600 block text-base font-medium">{item.name}</Link>
                                    </li>
                                  ))}
                                  <li className="pt-1">
                                    <Link to={`/products?category=${encodeURIComponent(section.category)}`} className="text-brand-orange font-bold text-sm">View All \u2197</Link>
                                  </li>
                                </ul>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path}
                      className="font-heading font-bold text-xl text-brand-navy"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/contact"
                className="bg-brand-orange text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
