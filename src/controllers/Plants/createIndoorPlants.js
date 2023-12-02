const { default: mongoose } = require('mongoose');
let fs = require('node:fs/promises');
require('../../schemas/plantsSchema')


let Plantas = mongoose.model('PlantsModel');

let createMasivoIndoorPlants = async () => {
    fs.readFile('../SERVER/src/utils/indoorPlants.json', 'utf-8')
    try {
        let data = await fs.readFile('../SERVER/src/utils/indoorPlants.json', 'utf-8');
        let indoorPlants = await Plantas.insertMany(JSON.parse(data));
        return indoorPlants;
    } catch (error) {
        console.error('Error al leer o crear las plantas Indoor:', error);
        throw error;
    }
}

module.exports = createMasivoIndoorPlants;

