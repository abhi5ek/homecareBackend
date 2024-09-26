// models/FaccidentModel.js
const mongoose = require('mongoose');

const FaccidentSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  todaysDate: { type: Date, required: true },
  incidentDate: { type: Date, required: true },
  time: { type: String, required: true },
  complaintType: { type: [String], required: true }, // Array to hold multiple checkboxes
  clientName: { type: String, required: true },
  clientTel: { type: String, required: true },
  caregiver: { type: String, required: true },
  description: { type: String, required: true },
  actionTaken: { type: String, required: true },
  resolutionDate: { type: Date },
  resolutionTime: { type: String },
  followUpActions: { type: String },
  followUpCallDate: { type: Date },
  followUpCallTime: { type: String },
  notes: { type: String },
  adminSignature: { type: String, required: true },
},{ timestamps: true });

module.exports = mongoose.model('Faccident', FaccidentSchema);
