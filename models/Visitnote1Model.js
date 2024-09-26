const mongoose = require('mongoose');

const VisitNoteSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  personalCare: {
    type: Map,
    of: {
      selectedDays: [String],
      caregiverNotes: String
    }
  }
},{ timestamps: true });

const VisitNote1 = mongoose.model('VisitNote1', VisitNoteSchema);

module.exports = VisitNote1;
