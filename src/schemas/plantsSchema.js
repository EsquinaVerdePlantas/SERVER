
let mongoose = require("mongoose");
const { Schema } = mongoose;

const plantsSchema = new Schema({
    name: {
        type: String,   // Or just    name: String,
        required: true
    },
    images: {
        type: [String], // Definición de un array de strings
        required: true, // Opcional, si quieres que siempre haya al menos una imagen
        validate: {
            validator: (value) => value.length <= 3, // Validación para un máximo de 3 URLs de imagen
            message: 'La propiedad imagenes debe contener como máximo 3 URLs de imagen.',
        },
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    sunlight: {
        type: String,
        enum: ['sol', 'sombra parcial', 'sombra', 'pleno sol'],
    },
    plantsCategory: {
        type: Schema.Types.ObjectId,
        ref: 'PlantsCategoryModel',
        required: true
    },
    WateringModel: {
        type: String,
    },
    CarefulLevel: {
        type: String,
    },
});

const PlantsModel = mongoose.model('PlantsModel', plantsSchema);

module.exports = PlantsModel;