const User = require('../models/User');
const { Post, Comment } = require('../models/Post');
const postController = {
    createPost: async (req, res) => {
        try {
            const date = new Date()
            const newPost = new Post({
                title: req.body.title,
                content: req.body.content,
                time: date,
                author: req.body.userid
            })
            const result = await newPost.save()
            res.status(200).json(result)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getAllPost: async (req, res) => {
        try {
            const post = await Post.find()
            res.status(200).json(post)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getAPost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate("author")
            res.status(200).json(post)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json("Delete successfully")
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    updatePost: async (req, res) => {
        try {
            const id = req.params.id
            const title = req.body.title
            const content = req.body.content
            const update = await Post.findByIdAndUpdate(id, {
                ...
                {
                    title: title,
                    content: content
                }
            })
            res.status(200).json(update)
        }
        catch (err) {
            return res.status(400).json("Update post failed")
        }
    }

}
module.exports = postController