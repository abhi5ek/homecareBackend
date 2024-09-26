const mongoose = require('mongoose');

const Mnursing14Schema = new mongoose.Schema({
    clientId: {
        type: String,
        required: true
    },
    lungAuscultationOptions: [String],
    capillaryNailRefill: [String],
    oxygen: {
        oxygenFlow: String,
        oxygenType: [String],
    },
    tracheostomy: {
        tracheostomySite: String,
        tracheostomySuctioning: String,
        tracheostomyFrequency: String,
    },
    ventilator: {
        ventilatorSetting: String,
        ventilatorVolume: String,
        ventilatorRate: String,
    },
    nebulizer: {
        nebulizerTx: String,
        nebulizerMed: String,
    },
    sputum: {
        sputumColor: String,
        sputumAmount: String,
    },
    comments: String,
    deniesProblems: Boolean
},{ timestamps: true });

const Mnursing14 = mongoose.model('Mnursing14', Mnursing14Schema);

module.exports = Mnursing14;
