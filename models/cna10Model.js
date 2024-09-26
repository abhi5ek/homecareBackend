const mongoose = require('mongoose');

const cna10Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  Review: [String],
  cnaName: String,
  cnaSignature: String,
  date: Date,
  comments: String
},{ timestamps: true });

const CNA10 = mongoose.model('CNA10', cna10Schema);

module.exports = CNA10;
