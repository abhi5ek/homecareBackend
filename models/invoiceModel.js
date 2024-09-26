const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  contractorName: { type: String, required: true },
  clientName: { type: String, required: true },
  tasks: { type: Map, of: Map },
  notes: { type: String },
  totalHoursWorked: { type: String },
  consumerSignature: { type: String, required: true },
  contractorSignature: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
},{ timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);
