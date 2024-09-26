const mongoose = require('mongoose');

const Nnursingform7Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
    GU:{

        noDeficit: { type: Boolean, default: false },
        frequency: { type: Boolean, default: false },
        urgency: { type: Boolean, default: false },
        hesitancy: { type: Boolean, default: false },
        odor: { type: Boolean, default: false },
        burning: { type: Boolean, default: false },
        retention: { type: Boolean, default: false },
        incontinence: { type: Boolean, default: false },
        dysuria: { type: Boolean, default: false },
        catheter: {
          irrigation: { type: Boolean, default: false },
          lastChange: { type: String }, // Assuming the date or info is entered as a string
          vaginalBleeding: { type: Boolean, default: false },
          discharge: { type: Boolean, default: false },
        },
        comments: { type: String }
    }
}, { timestamps: true });

const Nnursingform7 = mongoose.model('Nnursingform7', Nnursingform7Schema);

module.exports = Nnursingform7;


