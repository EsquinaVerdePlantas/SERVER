let mongoose = require('mongoose');
require('../../schemas/plantsSchema');

let Plant = mongoose.model('PlantsModel');
let PlantsCategoryModel = mongoose.model('PlantsCategoryModel');

let createPlantController = async (name, images, price, plantsCategory, description, sunlight, WateringModel, CarefulLevel) => {

    let categories = await PlantsCategoryModel.find({});
    let plantExist = await Plant.findOne({ name });

    if (plantExist) {
        throw new Error(`La 🌱 con nombre: ${name} ya existe en la base de Datos, no se puede crear nuevamente!`);
    }

    let category = categories.find(c => c.name === plantsCategory);

    let newPlant = await Plant.create({
        name: name,
        images: images,
        price: price,
        plantsCategory: category._id,
        description: description,
        sunlight: sunlight,
        WateringModel: WateringModel,
        CarefulLevel: CarefulLevel,
        description: description,
    })

    return newPlant;

}

module.exports = createPlantController;


