let createIndoorPlants = require('../../controllers/Plants/createIndoorPlants');


let createMasivoIndoorPlants = async (req, res) => {
    try {
        let response = await createIndoorPlants();
        res.status(201).json({ message: 'Plantas de interior creadas correctamente', data: response });
    } catch (error) {
        console.error('Error al crear las plantas Indoor:', error);
    }
}

module.exports = createMasivoIndoorPlants;
