const mongoose = require('mongoose');

// Define the schema for the CaregiverForm
const cna4Schema = new mongoose.Schema({
    clientId:{ type: String, required: false}, 
    personalCare: {
        type: String,
        required: true
    },
    mobility: {
        type: String,
        required: true
    },
    medAdmin: {
        type: String,
        required: true
    },
    meals: {
        type: String,
        required: true
    },
    environment: {
        type: String,
        required: true
    },
    procedures: {
        type: String,
        required: true
    },
    caregiverName: {
        type: String,
        required: true
    },
    daysTimeAvailable: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false
    }
},
{
    timestamps: true
});

// Create the model from the schema and export it
const CNA4 = mongoose.model('CNA4', cna4Schema);
module.exports = CNA4;
