let mongoose = require('mongoose');
require('../../schemas/plantsCategorySchema');

let Category = mongoose.model('PlantsCategoryModel');

let getAllCategories = async () => {
    let allCategories = await Category.find({});
    return allCategories;
}

module.exports = getAllCategories;


