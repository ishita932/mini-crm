// backend/models/Customer.js
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  total_spends: { type: Number, default: 0 },
  max_visits: { type: Number, default: 0 },
  last_visit_date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
