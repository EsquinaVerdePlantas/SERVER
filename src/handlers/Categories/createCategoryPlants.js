let createCategory = require('../../controllers/Categories/createCategoriesController.js');

let createCategoryPlants = async (req, res) => {
    let { name, description } = req.body;
    try {
        if (!name, !description) {
            throw new Error("Faltan Datos para crear la categoria!!");
        }
        let newCategory = await createCategory(name, description);
        res.status(201).send(newCategory);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = createCategoryPlants;