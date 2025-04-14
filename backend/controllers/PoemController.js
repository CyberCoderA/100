const Poem = require("../models/Poem");

const getAllPoems = async(req, res) => {
    try {
        const poemList = await Poem.find({});
        if(!poemList) {
            return res.status(404).json({message: "No poems on the database!"});
        }
    } catch(error) {
        res.status(500).json({message: error});
    }
}

const getPoem = async(req, res) => {
    try {
        const poem = await Poem.findById(req.params.poem_id);
            if(!poem) {
                return res.status(404).json({message: "Poem not found!"});
            }
        
            res.status(200).json(poem);
    } catch(error) {
        res.status(500).json({message: error});
    }
}

module.exports = {
    getAllPoems,
    getPoem
}