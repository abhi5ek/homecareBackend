const mongoose = require('mongoose');

const mnursing2Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    admittedFrom: String,
    allergies: String,
    diagnosis: String,
    chiefComplaints: String,
    reasonForAdmission: String,
    homeSocial: String,
    hospitalStays: String,
    comments: String,
},{ timestamps: true });

const Mnursing2 = mongoose.model('Mnursing2', mnursing2Schema);

module.exports = Mnursing2;
