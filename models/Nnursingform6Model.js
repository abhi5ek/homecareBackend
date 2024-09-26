const mongoose = require('mongoose');

const Nnursingform6Schema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true
},
    gastrointestinal:{

        anorexia: { type: Boolean, default: false },
        nausea: { type: Boolean, default: false },
        vomiting: { type: Boolean, default: false },
        bowelSounds: { type: Boolean, default: false },
        lastBM: { type: String, default: '' },
        abdomenSoftTender: { type: Boolean, default: false },
        diarrhea: { type: Boolean, default: false },
        constipation: { type: Boolean, default: false },
        incontinence: { type: Boolean, default: false },
        ostomyType: { type: String, default: '' },
        enteralFeedingType: { type: String, default: '' },
        enteralFeedingVia: { type: String, default: '' },
        enteralFeedingFlushing: { type: String, default: '' },
      }, 
    },
    { timestamps: true });

const Nnursingform6 = mongoose.model('Nnursingform6', Nnursingform6Schema);

module.exports = Nnursingform6;
