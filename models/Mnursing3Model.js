const mongoose = require('mongoose');

const mnursing3Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    patientName: String,
    dob: Date,
    temp: String,
    bpSit: String,
    bpStand: String,
    pulse: String,
    resp: String,
    height: String,
    weight: String,
},{ timestamps: true });

const Mnursing3 = mongoose.model('Mnursing3', mnursing3Schema);

module.exports = Mnursing3;
