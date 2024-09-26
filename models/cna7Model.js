const mongoose = require('mongoose');

const cna7Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  integumentAssessment: {
    skin: {
      clientDeniesProblems: Boolean,
    },
    color: {
      normal: Boolean,
      pink: Boolean,
      pale: Boolean,
      cyanotic: Boolean,
      jaundiced: Boolean,
    },
    temperature: {
      hot: Boolean,
      warm: Boolean,
      cool: Boolean,
    },
    condition: {
      dry: Boolean,
      moist: Boolean,
      ecchymosis: Boolean,
      rash: Boolean,
      petechie: Boolean,
      itch: Boolean,
      redness: Boolean,
      bruises: Boolean,
      scaling: Boolean,
      comment: String,
      openWoundLocation: String,
      describe: String,
    },
    skinProblems: {
      lesion: Boolean,
      scaling: Boolean,
      wound: Boolean,
      ulcer: Boolean,
      incision: Boolean,
      petechie: Boolean,
      rash: Boolean,
      ostomy: Boolean,
      cyst: Boolean,
      masses: Boolean,
      itch: Boolean,
      other: Boolean,
      describe: String,
    },
  },
},
{
  timestamps: true
});

const Cna7Model = mongoose.model('Cna7', cna7Schema);

module.exports = Cna7Model;
