const mongoose = require('mongoose');

const nnursingform8Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    skinSymptoms: {
        type: [String],
        required: true
    },
    respiratorySymptoms: {
        type: [String],
        required: true
    },
    musculoskeletalSymptoms: {
        type: [String],
        required: true
    }
},{ timestamps: true });

const Nnursingform8Model = mongoose.model('Nnursingform8', nnursingform8Schema);

module.exports = Nnursingform8Model;
