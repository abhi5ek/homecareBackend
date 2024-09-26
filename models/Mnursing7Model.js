const mongoose = require('mongoose');

const Mnursing7Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    color: [String],
    temperature: [String],
    turgor: [String],
    condition: [String],
    comments: { type: String, default: '' },
}, { timestamps: true });

const Mnursing7Model = mongoose.model('Mnursing7', Mnursing7Schema);

module.exports = Mnursing7Model;
