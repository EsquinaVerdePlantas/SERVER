let mongoose = require('mongoose');
require('../../schemas/plantsSchema');


let Plant = mongoose.model('PlantsModel');

let plantDeleteController = async (name) => {

    let plantExist = await Plant.findOne({ name });

    if (!plantExist) {
        throw new Error(`La 🌱 por nombre ${name} no existe en la base de datos para ser borrada`)
    }

    let res = Plant.findOneAndDelete({ name })
        .then(plant => `Borrada la 🌱 con exito!`)
        .catch(error => error)

    return res;

}
module.exports = plantDeleteController;
