
let mongoose = require('mongoose')
const { Schema } = mongoose;

const carefulLevel = new Schema({
    name: {
        type: String,
        default: 'Nivel de cuidados',
    },
    description: {
        type: String,
        enum: ["Fácil", "Muy facil", "Moderado"]
    },
    plant: {
        type: Schema.Types.ObjectId,
        ref: 'PlantsModel',
    },
});

const CarefulLevelModel = mongoose.model('CarefulLevelModel', carefulLevel);

module.exports = CarefulLevelModel;