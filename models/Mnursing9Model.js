// models/Mnursing9Model.js
const mongoose = require('mongoose');

const Mnursing9Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    GastroOptions: [String],
    bowelSounds: { type: String, default: '' },
    ostomyType: { type: String, default: '' },
    comments: { type: String, default: '' },
    deniesProblems: { type: Boolean, default: false },
}, { timestamps: true });

const Mnursing9Model = mongoose.model('Mnursing9', Mnursing9Schema);

module.exports = Mnursing9Model;
