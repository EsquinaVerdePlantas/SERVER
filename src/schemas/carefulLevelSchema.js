
import mongoose from "mongoose";
const {Schema} = mongoose;

const carefulLevel = new Schema({
    name: {
        type: String,
        default: 'Nivel de cuidados',
    },   
    description: { 
        type: String 
    }, 
});

const CarefulLevelModel = mongoose.model('CarefulLevelModel', carefulLevel);

module.exports = CarefulLevelModel;