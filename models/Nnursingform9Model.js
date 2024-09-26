// models/Mnursing13Model.js
const mongoose = require('mongoose');

const woundAssessmentSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  location: [String],
  stage: [String],
  length: [String],
  width: [String],
  depth: [String],
  drainage: [String],
  tunneling: [String],
  odor: [String],
  surTissue: [String],
  edema: [String]
}, { timestamps: true });

const Mnursing13 = mongoose.model('Nnursingform9', woundAssessmentSchema);

module.exports = Mnursing13;
