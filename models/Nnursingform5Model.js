const mongoose = require('mongoose');

const Nnursingform5Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    noDeficit: {
        type: Boolean,
        default: false
    },
    neuroSymptoms: {
        type: [String],
        default: []
    },
    mentalSymptoms: {
        type: [String],
        default: []
    },
    mentalComments: {
        type: String,
        default: ''
    },
}, { timestamps: true });

module.exports = mongoose.model('Nnursingform5', Nnursingform5Schema);
