let createPlant = require('../../controllers/Plants/createPlant')


const createPlantHandler = async (req, res) => {
    let { name, images, price, plantsCategory, description, sunlight, WateringModel, CarefulLevel } = req.body;
    try {
        if (!name, !images, !price, !plantsCategory, !description, !sunlight, !WateringModel, !CarefulLevel) {
            throw new Error(" ❌ Faltan Datos para crear la Planta!!");
        }
        let response = await createPlant(name, images, price, plantsCategory, description, sunlight, WateringModel, CarefulLevel);
        res.status(201).send(response)

    } catch (error) {
        res.status(400).json({ error: error.message })
        process.exit(1);
    }
};

module.exports = createPlantHandler;



