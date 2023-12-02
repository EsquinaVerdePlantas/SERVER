
const deletePlantHandler = (req, res) => {
    try {
        res.send('todo bien')
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = deletePlantHandler;