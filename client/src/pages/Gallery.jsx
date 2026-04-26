import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Grid3X3, LayoutGrid } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [layout, setLayout] = useState('masonry'); // 'masonry' | 'grid'

  const photos = [
    { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", title: "Biomedical Training Session", category: "Events" },
    { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800", title: "ICU Setup - Noble Hospital", category: "Installations" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", title: "OT Table Installation", category: "Installations" },
    { url: "https://images.unsplash.com/photo-1586773860418-d3b9a8ec8172?auto=format&fit=crop&q=80&w=800", title: "Quality Check Warehouse", category: "Operations" },
    { url: "https://images.unsplash.com/photo-1579154235602-3c2ae249f61b?auto=format&fit=crop&q=80&w=800", title: "Ventilator Demo", category: "Training" },
    { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800", title: "Client Consultation", category: "Events" },
    { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800", title: "Medical Equipment Showcase", category: "Events" },
    { url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800", title: "Infusion Pump Setup", category: "Installations" },
    { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", title: "Staff Calibration Training", category: "Training" },
    { url: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800", title: "Surgical Theatre Setup", category: "Installations" },
    { url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800", title: "Patient Monitoring Systems", category: "Operations" },
    { url: "https://images.unsplash.com/photo-1666214280165-0a9394d95b1a?auto=format&fit=crop&q=80&w=800", title: "Lab Equipment Servicing", category: "Operations" },
    { url: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=800", title: "Hospital Delivery & Logistics", category: "Operations" },
    { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800", title: "Annual Tech Conclave", category: "Events" },
    { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800", title: "Hands-on Device Training", category: "Training" },
    { url: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800", title: "Dialysis Unit Installation", category: "Installations" },
    { url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", title: "Emergency Care Equipment", category: "Operations" },
    { url: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80&w=800", title: "Distributor Meet 2024", category: "Events" },
  ];

  const categories = ['All', ...new Set(photos.map(p => p.category))];
  const filtered = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

  const categoryColors = {
    Events: 'from-purple-500 to-indigo-600',
    Installations: 'from-brand-teal to-brand-blue',
    Operations: 'from-brand-orange to-yellow-500',
    Training: 'from-green-500 to-emerald-600',
  };

  const categoryBadge = {
    Events: 'bg-purple-100 text-purple-700',
    Installations: 'bg-teal-100 text-teal-700',
    Operations: 'bg-orange-100 text-orange-700',
    Training: 'bg-green-100 text-green-700',
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative bg-blueprint py-28 text-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(26,122,138,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26,122,138,0.2) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 border border-brand-teal/20">
              Visual Showcase
            </span>
            <h1 className="text-6xl font-heading font-extrabold mb-4 leading-tight">
              Photo <span className="text-brand-teal">Gallery</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Glimpses of our operations, installations, and technical training sessions across Pune and beyond.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-12"
          >
            {[['18+', 'Photos'], ['4', 'Categories'], ['50+', 'Clients Served'], ['10+', 'Years Active']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-extrabold text-brand-teal">{num}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-bold">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Layout Toggle */}
      <section className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-teal text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-brand-teal/10 hover:text-brand-teal'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === 'All' ? photos.length : photos.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
            <button onClick={() => setLayout('masonry')}
              className={`p-2 rounded-lg transition-all ${layout === 'masonry' ? 'bg-white shadow text-brand-teal' : 'text-gray-400'}`}>
              <LayoutGrid size={18} />
            </button>
            <button onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg transition-all ${layout === 'grid' ? 'bg-white shadow text-brand-teal' : 'text-gray-400'}`}>
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + layout}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={
                layout === 'masonry'
                  ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
                  : 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'
              }
            >
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.04 }}
                  className={`${layout === 'masonry' ? 'break-inside-avoid' : ''} relative group rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white`}
                  onClick={() => setLightbox(photo)}
                >
                  <div className="overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${layout === 'grid' ? 'h-52' : 'h-auto'}`}
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-between p-5">
                    <div className="flex justify-end">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                        <ZoomIn size={18} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${categoryBadge[photo.category]}`}>
                        {photo.category}
                      </span>
                      <h3 className="text-white font-heading font-bold text-base mt-2 leading-tight">{photo.title}</h3>
                    </div>
                  </div>
                  {/* Always-visible badge on grid layout */}
                  {layout === 'grid' && (
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-0">
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.url} alt={lightbox.title} className="w-full max-h-[80vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/95 to-transparent p-8">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md ${categoryBadge[lightbox.category]}`}>
                  {lightbox.category}
                </span>
                <h3 className="text-white font-heading font-bold text-2xl mt-3">{lightbox.title}</h3>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition p-2 rounded-full text-white"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
