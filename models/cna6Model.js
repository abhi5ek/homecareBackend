const mongoose = require('mongoose');

const Cna6Schema = new mongoose.Schema({
  clientId:{ type: String, required: false}, 
  functionalLimitations: {
    amputation: { type: String, default: '' },
    bowelIncontinence: { type: Boolean, default: false },
    contracture: { type: Boolean, default: false },
    hearing: { type: Boolean, default: false },
    paralysis: { type: Boolean, default: false },
    endurance: { type: Boolean, default: false },
    ambulation: { type: Boolean, default: false },
    speech: { type: Boolean, default: false },
    vision: { type: Boolean, default: false },
    poorManualDexterity: { type: Boolean, default: false },
    legallyBlind: { type: Boolean, default: false },
    dyspnea: { type: Boolean, default: false },
    poorHandEyeCoordination: { type: Boolean, default: false },
    unsteadyGait: { type: Boolean, default: false },
    poorBalance: { type: Boolean, default: false },
    other: { type: String, default: '' },
  },
  activitiesPermitted: {
    completeBedrest: { type: Boolean, default: false },
    bedrestBRP: { type: Boolean, default: false },
    upAsTolerated: { type: Boolean, default: false },
    transferBedToChair: { type: Boolean, default: false },
    independentInHome: { type: Boolean, default: false },
    other: { type: String, default: '' },
  },
  fallPrecaution: {
    riskOfFall: { type: Boolean, default: false },
    fallPrecautionEducationProvided: { type: Boolean, default: false },
  },
  assistiveDevice: {
    cane: { type: Boolean, default: false },
    quadCane: { type: Boolean, default: false },
    walker: { type: Boolean, default: false },
    rollingWalker: { type: Boolean, default: false },
    crutches: { type: Boolean, default: false },
    regWheelchair: { type: Boolean, default: false },
    electricWheelchair: { type: Boolean, default: false },
    other: { type: String, default: '' },
  },
  equipment: {
    hospitalBed: { type: Boolean, default: false },
    commode: { type: Boolean, default: false },
    hoyerLift: { type: Boolean, default: false },
    nebulizer: { type: Boolean, default: false },
    bathChair: { type: Boolean, default: false },
    apneaMachine: { type: Boolean, default: false },
    oxygenConcentrator: { type: Boolean, default: false },
    other: { type: String, default: '' },
    deviceEquipmentNeededAtHome: { type: String, default: '' },
  },
},
{
  timestamps: true
});

module.exports = mongoose.model('Cna6', Cna6Schema);
