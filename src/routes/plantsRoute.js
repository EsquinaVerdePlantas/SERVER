const { Router } = require("express");
const plantsRoute = Router();
const deletePlantHandler = require("../handlers/Plants/deletePlantHandler");
let createMasivoIndoorPlants = require('../handlers/Plants/createIndoorPlantsHandler');
let getAllPlants = require('../handlers/Plants/getPlantsHandler');
let createPlant = require('../handlers/Plants/createPlantHandler')

// Get All Plants --> OK
plantsRoute.get('/all', getAllPlants);


// Create Plant --> OK
plantsRoute.post('/create', createPlant);

// Delete Plant --> Pendiente
plantsRoute.delete('/:id', deletePlantHandler);


// Get Plant by Id  --> Pendiente
plantsRoute.get('/:id', (req, res) => {
    let { id } = req.params;
    res.send(`Este es el Id: ${id}`)
})

// Create Masivo de IndoorPlants --> OK
plantsRoute.post('/createMasivo', createMasivoIndoorPlants);

module.exports = plantsRoute;