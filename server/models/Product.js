const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['ICU Equipment', 'Operation Theatre', 'Respiratory Care', 'Hospital Furniture', 'Consumables & Accessories'] 
  },
  subcategory: { type: String },
  description: { type: String, required: true },
  specs: { type: Map, of: String },
  images: [{ type: String }],
  dataSheetUrl: { type: String },
  whatsappMessage: { type: String },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
