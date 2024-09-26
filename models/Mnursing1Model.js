// models/Mnursing1Model.js

const mongoose = require('mongoose');

const Mnursing1Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    date: Date,
    admissionDate: Date,
    client: String,
    phone: String,
    dob: Date,
    ssn: String,
    age: String,
    race: String,
    sex: String,
    emergencyContact: String,
    emergencyRel: String,
    emergencyPhone: String,
    responsibleParty: String,
    responsiblePhone: String,
    advanceDirective: Boolean,
    adCopyOnFile: Boolean,
    dnr: Boolean,
    dnrCopyOnFile: Boolean,
    poa: Boolean,
    poaCopyOnFile: Boolean,
    poaName: String,
    primaryLanguage: String,
    culturalCustoms: String,
    otherComments: String,
},{ timestamps: true });

module.exports = mongoose.model('Mnursing1', Mnursing1Schema);
