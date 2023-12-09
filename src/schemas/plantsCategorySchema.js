const { default: mongoose } = require('mongoose');
const { Schema } = mongoose;

const plantCategory = new Schema({
    name: {
        type: String,
        enum: ['interior', 'exterior', 'decorativa'],
    },
    description: {
        type: String
    },
    plant: {
        type: Schema.Types.ObjectId,
        ref: 'PlantsModel',
    },
});

// 


const PlantsCategoryModel = mongoose.model('PlantsCategoryModel', plantCategory);

module.exports = PlantsCategoryModel;