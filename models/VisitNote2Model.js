const mongoose = require('mongoose');

const VisitNote2Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  meals: {
    type: Map,
    of: {
      selectedDays: [String],
      caregiverNotes: String
    }
  }
},{ timestamps: true });

const VisitNote2 = mongoose.model('VisitNote2', VisitNote2Schema);

module.exports = VisitNote2;
