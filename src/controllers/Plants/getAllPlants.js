require('../../schemas/plantsSchema');
let mongoose = require('mongoose');

let allPlants = mongoose.model('PlantsModel');

let getAllPlants = async () => {
    let response = await allPlants.find({}).populate('plantsCategory');
    return response
}

module.exports = getAllPlants;