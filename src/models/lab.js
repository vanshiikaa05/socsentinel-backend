const mongoose = require('mongoose');

const LabSchema = new mongoose.Schema({
  name: String,
  networkSize: String,
  apiKey: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lab', LabSchema);
