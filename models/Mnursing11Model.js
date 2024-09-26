const mongoose = require('mongoose');

const Mnursing11Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    deniesProblems: { type: Boolean, default: false },
    lungAuscultation: {
        clear: { type: Boolean, default: false },
        left: { type: Boolean, default: false },
        right: { type: Boolean, default: false },
        inspiratoryExpiratory: { type: Boolean, default: false },
        capillaryNailRefill: { type: Boolean, default: false },
    },
    symptoms: {
        dyspnea: { type: Boolean, default: false },
        sobAtRestExertion: { type: Boolean, default: false },
        orthopnea: { type: Boolean, default: false },
        cough: { type: Boolean, default: false },
        hemoptysis: { type: Boolean, default: false },
        labored: { type: Boolean, default: false },
        sputum: { type: String, default: '' },
    },
    spectrumColor:{type:String , deafult:''},
    oxygenOptions: { type: [String], default: [] },
    comments: { type: String, default: '' },
}, { timestamps: true });

const Mnursing11Model = mongoose.model('Mnursing11', Mnursing11Schema);

module.exports = Mnursing11Model;
