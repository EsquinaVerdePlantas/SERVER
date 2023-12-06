const { default: mongoose } = require('mongoose');
let fs = require('node:fs/promises');
require('../../schemas/plantsSchema');
require('../../schemas/plantsCategorySchema');


let Plantas = mongoose.model('PlantsModel');
let PlantsCategoryModel = mongoose.model('PlantsCategoryModel');

let createMasivoIndoorPlants = async () => {

    try {
        let data = await fs.readFile('../SERVER/src/utils/indoorPlants.json', 'utf-8');
        let plantsData = JSON.parse(data);
        let categories = await PlantsCategoryModel.find({});

        let plantsToInsert = plantsData.map(plant => {
            // Encuentra la categoría correspondiente en base al nombre en el JSON
            let category = categories.find(cat => cat.name === plant.plantCategory);

            return {
                ...plant,
                plantsCategory: category._id // Asigna el ID de la categoría correspondiente
            };
        });

        // Insertar las plantas con sus categorías asociadas
        let indoorPlants = await Plantas.insertMany(plantsToInsert);
        return indoorPlants;
    } catch (error) {
        console.error('Error al leer o crear las plantas Indoor:', error);
        throw error;
    }
}



module.exports = { createMasivoIndoorPlants };

