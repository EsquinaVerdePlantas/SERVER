
import mongoose from "mongoose";
const {Schema} = mongoose;

const plantsSchema = new Schema({
    name: {
        type: String,   // Or just    name: String,
        required: true
    },   
    image: {
        type: String
    },
    price: {
        type: Number
    },
    plantCategory: {
        type: String,
        enum: ['interior', 'exterior', 'decorativa'], 
    },
    description: { 
        type: String 
    }, 
    sunlight: { 
        type: String,
        enum: ['sol', 'sombra partial', 'sombra'],
    }, 
});

const PlantsModel = mongoose.model('PlantsModel', plantsSchema);

module.exports = PlantsModel;