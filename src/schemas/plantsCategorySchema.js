
import mongoose from "mongoose";
const {Schema} = mongoose;

const plantCategory = new Schema({
    name: {
        type: String,
        enum: ['interior', 'exterior', 'decorativa'],
    },   
    description: { 
        type: String 
    }, 
});

const PlantsCategoryModel = mongoose.model('PlantsCategoryModel', plantCategory);

module.exports = PlantsCategoryModel;