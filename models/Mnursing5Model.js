const mongoose = require('mongoose');

const mnursing5Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    eyes: [String],
    eyesR: String,
    eyesL: String,
    nose: [String],
    oral: [String],
    throat: [String],
    ears: [String],
    comments: String,
    deniesProblems: Boolean,
},{ timestamps: true });

const Mnursing5 = mongoose.model('Mnursing5', mnursing5Schema);

module.exports = Mnursing5;
