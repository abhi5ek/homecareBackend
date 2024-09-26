// models/NnursingForm3Model.js
const mongoose = require('mongoose');

const Nnursingform3Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    intensity: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    controlled: { type: String, required: true },
    controlledBy: { type: String },
    comments: { type: String },
    deniesProblems: { type: Boolean, default: false },
},{ timestamps: true });

const Nnursingform3 = mongoose.model('Nnursingform3', Nnursingform3Schema);

module.exports = Nnursingform3;
