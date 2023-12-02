
import mongoose from "mongoose";
const { Schema } = mongoose;

const watering = new Schema({
    name: {
        type: String,
        default: 'Riego',
    },
    description: {
        type: String
    },
    plant: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'PlantsModel',
    },
});

const WateringModel = mongoose.model('WateringModel', watering);

module.exports = WateringModel;