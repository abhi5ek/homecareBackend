const mongoose = require('mongoose');

const satisfactionForm2Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  questions: [
    {
      yes: { type: Boolean, default: false },
      no: { type: Boolean, default: false },
      na: { type: Boolean, default: false },
      comments: { type: String }
    }
  ],
  otherComments: { type: String },
  surveyMethod: { type: String, enum: ['phone', 'inPerson'] },
  clientSignature: { type: String, required: true },
  clientDate: { type: Date, required: true },
  adminSignature: { type: String, required: true },
  adminDate: { type: Date, required: true }
},{ timestamps: true });

const Satisfactionform2 = mongoose.model('Satisfactionform2', satisfactionForm2Schema);

module.exports = Satisfactionform2;
