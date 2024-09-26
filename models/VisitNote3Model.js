const mongoose = require('mongoose');

const VisitNote3Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  householdDuties: {
    type: Map,
    of: {
      selectedDays: [String],
      caregiverNotes: String
    }
  }
},{ timestamps: true });

const VisitNote3 = mongoose.model('VisitNote3', VisitNote3Schema);

module.exports = VisitNote3;
