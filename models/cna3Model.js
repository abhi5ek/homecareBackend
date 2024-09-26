const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cna3Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  pastHistory: { type: String, required: true },
  livesAloneYes: { type: Boolean, required: false }, // Changed required to false
  livesAloneNo: { type: Boolean, required: false },  // Changed required to false
  familyComposition: { type: String, required: true },
  legalNextToKin: { type: String, required: true },
  tel: { type: String, required: true },
  caregiverName: { type: String, required: true },
  address: { type: String, required: true },
},
{
  timestamps: true
});

module.exports = mongoose.model('Cna3', Cna3Schema);