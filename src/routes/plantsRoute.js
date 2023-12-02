const { Router } = require("express");
const plantsRoute = Router();
const deletePlantHandler = require("../handlers/Plants/deletePlantHandler");
let createMasivoIndoorPlants = require('../handlers/Plants/createIndoorPlantsHandler');
let getAllPlants = require('../handlers/Plants/getPlantsHandler');

// Get All Plants --> OK
plantsRoute.get('/all', getAllPlants);


// Create Plant --> Pendiente
plantsRoute.post('/', (req, res) => {
    res.send("is all Ok for now")
});

// Delete Plant --> Pendiente
plantsRoute.delete('/', deletePlantHandler);


// Get Plant by Id  --> Pendiente
plantsRoute.get('/:id', (req, res) => {
    let { id } = req.params;
    res.send(`Este es el Id: ${id}`)
})

// Create Masivo de IndoorPlants --> OK
plantsRoute.post('/createMasivo', createMasivoIndoorPlants);

module.exports = plantsRoute;