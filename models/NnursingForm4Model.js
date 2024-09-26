// models/NnursingForm4Model.js
const mongoose = require('mongoose');

const Nnursingform4Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    noDeficit: { type: Boolean, default: false },
    cardioSymptoms: [{ type: String }],
    cardioComments: { type: String },
},{ timestamps: true });

const Nnursingform4 = mongoose.model('Nnursingform4', Nnursingform4Schema);

module.exports = Nnursingform4;
