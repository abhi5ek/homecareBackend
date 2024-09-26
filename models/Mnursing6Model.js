// Mnursing6Model.js
const mongoose = require('mongoose');

const mnursing6Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    neurological: [String],
    comments: String,
    deniesProblems: Boolean,
}, {
    timestamps: true
},{ timestamps: true });

const Mnursing6 = mongoose.model('Mnursing6', mnursing6Schema);

module.exports = Mnursing6;
