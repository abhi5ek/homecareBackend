const mongoose = require('mongoose');

const Mnursing8Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    selectedOptions: [String],
    edema: { type: String, default: '' },
    pacemakerSetting: { type: String, default: '' },
    dateChecked: { type: Date },
    comments: { type: String, default: '' },
    deniesProblems: { type: Boolean, default: false },
}, { timestamps: true });

const Mnursing8Model = mongoose.model('Mnursing8', Mnursing8Schema);

module.exports = Mnursing8Model;
