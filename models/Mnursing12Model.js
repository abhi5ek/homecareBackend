// models/Mnursing12Model.js
const mongoose = require('mongoose');

const mnursing12Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
  mentalStatus: [{ value: String, label: String }],
  adls: [{ value: String, label: String }],
  iadls: [{ value: String, label: String }],
  specialEquipment: [{ value: String, label: String }],
  safetyMeasures: [{ value: String, label: String }],
  functionalLimitations: [{ value: String, label: String }],
  activitiesPermitted: [{ value: String, label: String }],
  socialActivities: [{ value: String, label: String }],
  prognosis: { value: String, label: String },
  otherComments: String,
}, { timestamps: true });

module.exports = mongoose.model('Mnursing12', mnursing12Schema);
