let deletePlant = require('../../controllers/Plants/deletePlant');


const deletePlantHandler = async (req, res) => {
    let { name } = req.query;
    try {
        await deletePlant(name);
        res.status(501).send(`Se ha borrado la 🌱 por nombre ${name} de la base de datos! `)
    } catch (error) {
        res.status(400).json({ error: error.message });
        process.exit(1);
    }
};

module.exports = deletePlantHandler;