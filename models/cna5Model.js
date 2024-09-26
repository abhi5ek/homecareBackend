const mongoose = require('mongoose');

const cna5Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  livingWill: [String],
  provisions: [String],
  adls: [String],
  safetyHazards: [String],
  neuroMentalStatus: [String],
  comments: String
},
{
  timestamps: true
});

const Cna5Model = mongoose.model('Cna5', cna5Schema);
module.exports = Cna5Model;
