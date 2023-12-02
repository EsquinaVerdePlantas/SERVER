require('../../schemas/plantsSchema');
let mongoose = require('mongoose');

let allPlants = mongoose.model('PlantsModel');

let getAllPlants = async () => {
    let response = await allPlants.find({});
    return response
}

module.exports = getAllPlants;