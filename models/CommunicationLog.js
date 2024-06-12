// backend/models/CommunicationLog.js
const mongoose = require('mongoose');

const CommunicationLogSchema = new mongoose.Schema({
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  message: String,
  status: { type: String, enum: ['SENT', 'FAILED'] }
}, { timestamps: true });

module.exports = mongoose.model('CommunicationLog', CommunicationLogSchema);
