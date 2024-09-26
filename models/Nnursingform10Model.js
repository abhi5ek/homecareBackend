// models/Nnursingform10Model.js
const mongoose = require('mongoose');

const narrativeFormSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    narrative: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    nurseSignature: {
        type: String,
        required: true
    }
},{ timestamps: true });

const Nnursingform10Model = mongoose.model('Nnursingform10', narrativeFormSchema);

module.exports = Nnursingform10Model;
