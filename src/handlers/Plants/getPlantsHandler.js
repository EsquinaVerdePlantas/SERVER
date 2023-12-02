let getAllPlants = require('../../controllers/Plants/getAllPlants');

let allPlants = async (req, res) => {

    try {
        let response = await getAllPlants();
        if (!response.length) {
            throw new Error("No hay plantas en la Base de Datos!");
        }
        res.status(201).send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = allPlants;