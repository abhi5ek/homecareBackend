// Satisfactionform1Model.js

const mongoose = require('mongoose');

const satisfactionForm1Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  clientName: { type: String, required: true },
  phone: { type: String, required: true },
  admissionDate: { type: Date, required: true },
  dischargeDate: { type: Date, required: true },
  interviewDate: { type: Date, required: true },
  nameOfPersonAnswering: { type: String, required: true },
  relationship: { type: String, required: true },
  nameOfServiceProvider: { type: String, required: true }
},{ timestamps: true });

const Satisfactionform1 = mongoose.model('Satisfactionform1', satisfactionForm1Schema);

module.exports = Satisfactionform1;
