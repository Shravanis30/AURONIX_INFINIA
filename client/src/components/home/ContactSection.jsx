import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    category: 'ICU',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call for static site
    setTimeout(() => {
      console.log('Enquiry Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', organization: '', phone: '', email: '', category: 'ICU', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
      
      // Optional: Open WhatsApp with message
      const whatsappMsg = `New Enquiry from ${formData.name} (%2B${formData.phone}) for ${formData.category}: ${formData.message}`;
      window.open(`https://wa.me/919112223296?text=${whatsappMsg}`, '_blank');
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-blueprint">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-brand-teal/10 border border-gray-100"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-extrabold text-brand-navy mb-2">Send an Enquiry</h2>
              <p className="text-gray-500">We'll get back to you with a formal quote within 1 working hour.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Full Name*</label>
                  <input 
                    required type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Organization*</label>
                  <input 
                    required type="text" name="organization" value={formData.organization} onChange={handleChange}
                    className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all"
                    placeholder="Hospital/Clinic Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Phone Number*</label>
                  <input 
                    required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Email Address*</label>
                  <input 
                    required type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all"
                    placeholder="john@hospital.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Equipment Category</label>
                <select 
                  name="category" value={formData.category} onChange={handleChange}
                  className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all appearance-none"
                >
                  <option value="ICU">ICU Equipment</option>
                  <option value="OT">OT Equipment</option>
                  <option value="Respiratory">Respiratory Care</option>
                  <option value="Furniture">Hospital Furniture</option>
                  <option value="Accessories">Consumables & Accessories</option>
                  <option value="Other">Other Requirement</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">Message / Specific Requirement</label>
                <textarea 
                  required name="message" value={formData.message} onChange={handleChange} rows="4"
                  className="w-full bg-brand-light border-2 border-transparent focus:border-brand-teal focus:bg-white p-4 rounded-xl outline-none transition-all"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <button 
                disabled={status === 'loading'}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-xl transition-all ${
                  status === 'success' ? 'bg-brand-green text-white' : 'bg-brand-teal text-white hover:bg-brand-navy shadow-brand-teal/20'
                }`}
              >
                {status === 'loading' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <Clock size={24} />
                  </motion.div>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={24} />
                    <span>Message Sent Successfully</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
              {status === 'error' && <p className="text-red-500 text-center font-bold">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

          {/* Right Side: Info */}
          <div className="space-y-12 py-8">
            <div>
              <h2 className="text-4xl font-heading font-extrabold text-brand-navy mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-teal flex items-center justify-center shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy">Office Address</h4>
                    <p className="text-gray-500 max-w-xs">401 Athrava Jaytu, New Timber Merchant Society, Ghorphade Peth, Pune - 411042</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-teal flex items-center justify-center shadow-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy">Direct Contact</h4>
                    <p className="text-gray-500">+91 91122 23296 / +91 91122 23161</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-teal flex items-center justify-center shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy">Email Support</h4>
                    <p className="text-gray-500">info@auronixinfinia.com<br />auronixinfinia@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-teal flex items-center justify-center shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-navy">Business Hours</h4>
                    <p className="text-gray-500">Monday – Saturday: 9:00 AM – 7:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-64 relative">
              {/* Google Maps Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m17!1m8!1m3!1d1130.6300185989182!2d73.8643881!3d18.5028441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12569527ec3%3A0x7d25e019f6a62788!2sNew%20Timber%20Market%2C%20Ganj%20Peth%2C%20Pune%2C%20Maharashtra%20411042!5e1!3m2!1sen!2sin!4v1740345600000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
