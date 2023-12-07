let mongoose = require('mongoose');
require('../../schemas/plantsSchema');

let Plant = mongoose.model('PlantsModel');

let getPlantByNameController = async (name) => {

    let plantByName = await Plant.findOne({ name });

    if (!plantByName) {
        throw new Error(`La 🌱 por nombre ${name} no se encuentra en la Base de Datos!`);
    }

    return plantByName
}

module.exports = getPlantByNameController;