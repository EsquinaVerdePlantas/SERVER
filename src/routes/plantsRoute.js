
const {Router} = require("express");
const plantsRoute = Router();
const deletePlantHandler = require("../handlers/deletePlantHandler.js");

plantsRoute.get('/', (req, res) => {
    res.send("is all Ok for now")
});

plantsRoute.post('/', (req, res) => {
    res.send("is all Ok for now")
});

plantsRoute.delete('/', deletePlantHandler);

module.exports = plantsRoute;