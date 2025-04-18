const Poem = require("../models/Poem");

const getAllPoems = async(req, res) => {
    try {
        const { query } = req.query;

        // Construct the aggregation pipeline
        const pipeline = [];

        // Add Atlas Search stage for fuzzy multi-field search
        if(query) {
            pipeline.push({
                $search: {
                    index: search, 
                    compound: {
                        should: [
                          {
                            text: {
                              query: query,
                              path: 'title',
                              fuzzy: { maxEdits: 2 }
                            }
                          }
                        ],
                        minimumShouldMatch: 1
                      }
                }
            })
        }

         // Execute the aggregation pipeline
         const poems = await Poem.aggregate(pipeline);

         res.json(poems);
    } catch(error) {
        res.status(500).json({message: 'Server Error'});
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

const deletePoem = async(req, res) => {
    try {
        const deletedPoem = await Poem.findByIdAndDelete(req.params.poem_id);

        if(!deletedPoem) {
            return res.status(404).json({message: "Poem not found!"});
        }

        res.json({ message: 'Poem deleted successfully' });
    }  catch(error) {

    }
}

module.exports = {
    getAllPoems,
    getPoem,
    deletePoem
}