const mongoose = require('mongoose');

const VisitNote5Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  otherTasks: {
    type: Map,
    of: {
      selectedDays: [String],
      caregiverNotes: String
    }
  }
},{ timestamps: true });

const VisitNote5 = mongoose.model('VisitNote5', VisitNote5Schema);

module.exports = VisitNote5;
