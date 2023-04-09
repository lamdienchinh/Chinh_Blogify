const User = require('../models/User');

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json(users)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getOne: async (req, res) => {
        try {
            const user = await User.findOne(req.body)
            res.status(200).json(user)
        }
        catch (err) {
            return res.status(404).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json("Delete successfully")
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }
}
module.exports = userController