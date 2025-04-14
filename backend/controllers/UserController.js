const User = require('../models/User');

const getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('-user_password');
        if(!user) {
            return res.status(404).json({message: "User not found!"});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error});
    }
}

module.exports = {
    getUser
}