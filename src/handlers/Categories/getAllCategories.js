let categories = require('../../controllers/Categories/getAllCategoriesController')


let getAllCategories = async (req, res) => {
    try {
        let allCategories = await categories();
        if (!allCategories.length) {
            throw new Error("No hay categorias en la Base de Datos!");
        }
        res.status(201).send(allCategories)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

module.exports = getAllCategories;