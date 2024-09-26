const mongoose = require('mongoose');

const mnursing4Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    intensity: String,
    location: String,
    duration: String,
    controlled: String,
    controlledBy: String,
    comments: String,
    deniesProblems: Boolean,
},{ timestamps: true });

const Mnursing4 = mongoose.model('Mnursing4', mnursing4Schema);

module.exports = Mnursing4;
