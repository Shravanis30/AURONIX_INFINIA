const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { 
    type: String, 
    required: true, 
    enum: [
      'ICU Equipment', 
      'Operation Theatre', 
      'Medical Cold Chain', 
      'Blood Bank Equipment', 
      'Hospital Infra & Solutions', 
      'Diagnostic & Laboratory', 
      'Respiratory Care', 
      'Hospital Furniture', 
      'Consumables & Accessories'
    ] 
  },
  desc: { type: String, required: true },
  specs: { type: Map, of: String },
  features: [{ type: String }],
  image: { type: String },
  images: [{ type: String }],
  dataSheetUrl: { type: String },
  whatsappMessage: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
