let { Router } = require("express");
let categoryPlants = Router();
let createCategoriesPlants = require('../handlers/Categories/createCategoryPlants.js');
let getAllCategories = require('../handlers/Categories/getAllCategories.js')


// Get All Categorys --> OK
categoryPlants.get('/', getAllCategories);


// Create Category --> OK
categoryPlants.post('/create', createCategoriesPlants);

// Delete Category
categoryPlants.delete('/delete', (req, res) => {
    res.send("is all Ok for now")
});


// Get Category by Id 
categoryPlants.get('/:id', (req, res) => {
    let { id } = req.params;
    res.send(`Este es el Id: ${id}`)
})

module.exports = categoryPlants;