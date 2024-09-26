// models/Mnursing10Model.js
const mongoose = require('mongoose');

const Mnursing10Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    GUOptions: [String],
    catheterType: { type: String, default: '' },
    catheterSizeF: { type: String, default: '' },
    catheterSizeCC: { type: String, default: '' },
    comments: { type: String, default: '' },
    deniesProblems: { type: Boolean, default: false },
}, { timestamps: true });

const Mnursing10Model = mongoose.model('Mnursing10', Mnursing10Schema);

module.exports = Mnursing10Model;
