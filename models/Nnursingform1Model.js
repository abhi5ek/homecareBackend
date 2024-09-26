// models/Nnursingform1Model.js
const mongoose = require('mongoose');

const Nnursingform1Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    patientName: { type: String, required: true },
    dob: { type: Date, required: true },
    vitalsign:{

        temp: { type: String },
        bpSit: { type: String },
        bpStand: { type: String },
        pulse: { type: String },
        resp: { type: String },
        height: { type: String },
        weight: { type: String },
        bs: { type: String }
    },
},{ timestamps: true });

const Nnursingform1 = mongoose.model('Nnursingform1', Nnursingform1Schema);

module.exports = Nnursingform1;
