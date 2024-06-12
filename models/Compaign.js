// backend/models/Campaign.js
const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  rules: [{
    field: String,
    operator: String,
    value: String
  }],
  size: Number,
  created_at: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Campaign', CampaignSchema);
