let getPlantByName = require('../../controllers/Plants/getPlantByNameController');


let getPlantByNameHandler = async (req, res) => {

    const { name } = req.query;
    console.log(name);
    try {
        let response = await getPlantByName(name);
        res.status(201).send(response);
    } catch (error) {
        res.status(501).send(`Error al obtener la planta por nombre: ${name} y este es el ${error}`);
        process.exit(1);
    }
}

module.exports = getPlantByNameHandler;