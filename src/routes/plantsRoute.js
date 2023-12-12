const { Router } = require("express");
const plantsRoute = Router();
const deletePlantHandler = require("../handlers/Plants/deletePlantHandler");
let createMasivoIndoorPlants = require('../handlers/Plants/createIndoorPlantsHandler');
let getAllPlants = require('../handlers/Plants/getPlantsHandler');
let createPlant = require('../handlers/Plants/createPlantHandler')
let getPlantByName = require('../handlers/Plants/getPlantByName');
const getPlantByIdHandler = require("../handlers/Plants/getPlantByIdHandler");


// Get All Plants --> OK
plantsRoute.get('/all', getAllPlants);

// Create Plant --> OK
plantsRoute.post('/create', createPlant);

// Delete Plant --> OK
plantsRoute.delete('/delete/', deletePlantHandler);

// Get Plant by Id  --> OK
plantsRoute.get('/:id', getPlantByIdHandler);

// Create Masivo de IndoorPlants --> OK
plantsRoute.post('/createMasivo', createMasivoIndoorPlants);

// Get by Name --> OK
plantsRoute.get('/', getPlantByName);

module.exports = plantsRoute;