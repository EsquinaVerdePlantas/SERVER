let { createMasivoIndoorPlants } = require('../../controllers/Plants/createIndoorPlants');


let createMasivoIndoorPlantsHandler = async (req, res) => {
    try {
        let response = await createMasivoIndoorPlants();
        res.status(201).json({ message: 'Plantas 🌱 creadas correctamente', data: response });
    } catch (error) {
        console.error('Error al crear las plantas Indoor:', error);
        process.exit(1);
    }
}

module.exports = createMasivoIndoorPlantsHandler;
