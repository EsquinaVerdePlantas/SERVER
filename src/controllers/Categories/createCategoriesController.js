const { mongoose } = require('mongoose');
require('../../schemas/plantsCategorySchema');

let Category = mongoose.model('PlantsCategoryModel');

let createCategory = async (name, description) => {
    let categoryExist = await Category.findOne({ name });

    if (categoryExist) {
        throw new Error("La Categoria ya se encuentra en la Base de Datos!");
    }

    let newCategory = await Category.create({
        name: name,
        description: description,
    })

    return newCategory;
}

module.exports = createCategory;
