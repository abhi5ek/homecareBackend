const mongoose = require('mongoose');

const VisitNote4Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  socialNeeds: {
    type: Map,
    of: {
      selectedDays: [String],
      caregiverNotes: String
    }
  }
},{ timestamps: true });

const VisitNote4 = mongoose.model('VisitNote4', VisitNote4Schema);

module.exports = VisitNote4;
