
import mongoose from "mongoose";
const {Schema} = mongoose;

const watering = new Schema({
    name: {
        type: String,
        default: 'Riego',
    },   
    description: { 
        type: String 
    }, 
});

const WateringModel = mongoose.model('WateringModel', watering);

module.exports = WateringModel;