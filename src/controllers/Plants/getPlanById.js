
let mongoose = require('mongoose');
require('../../schemas/plantsSchema.js');
let Plant = mongoose.model('PlantsModel');

const getPlantById = async (id) => {

    let plantById = await Plant.findById( id );

    if (!plantById) {
        throw new Error(`Esa 🌱 no se encuentra en la Base de Datos!`);
    }   
    
/*  Id compuesto por 24 caracteres hexadecimales. Si colocas 1 más o un menos, sale error
    Un cliente no va a buscar 2642452726...etc. y colocar 4, 56, etc.. causará error.
    Por ello no se pone en el mensaje.*/

    return plantById
};

module.exports = getPlantById;