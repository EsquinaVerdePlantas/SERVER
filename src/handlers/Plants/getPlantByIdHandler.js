
const getPlantById = require("../../controllers/Plants/getPlanById.js");

const getPlantByIdHandler = async (req, res) => {

    try {
        const {id} = req.params;
        
        const plantById = await getPlantById(id);
        
        res.status(200).json({plantById})
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getPlantByIdHandler;