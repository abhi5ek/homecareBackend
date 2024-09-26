const mongoose = require('mongoose');

const cna8Schema = new mongoose.Schema({
    clientId:{ type: String, required: false}, 
    area: {
        type: String,
        required: true,
    },
    painBetter: {
        type: String,
        required: true,
    },
    painWorse: {
        type: String,
        required: true,
    },
    medication: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('CNA8', cna8Schema);
