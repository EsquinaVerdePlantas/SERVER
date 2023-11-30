
const {Router} = require("express");
const plantsRoute = Router();

plantsRoute.get('/', (req, res) => {
    res.send("is all Ok for now")
});

module.exports = plantsRoute;