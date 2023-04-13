const User = require('../models/User');
const { TutorPost } = require('../models/TutorPost');
const { cloudinary } = require('../utils/index.js')

const tutorController = {
    createPost: async (req, res) => {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            const url = result.secure_url;
            const newPost = new TutorPost({
                fullname: req.body.fullname,
                phonenumber: req.body.phonenumber,
                email: req.body.email,
                gender: req.body.gender,
                dob: req.body.dob,
                address: req.body.address,
                intro: req.body.intro,
                job: req.body.job,
                province: req.body.province,
                subjects: req.body.subjects,
                img: url,
                time: Date.now(),
                author: req.user._id
            });
            const result2 = await newPost.save();
            return res.status(200).json(result2);
        } catch (err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },
    getAllPost: async (req, res) => {
        try {
            const post = await Post.find().populate("author")
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
    // ,
    // addComment: async (req, res) => {
    //     try {
    //         const postid = req.params.id
    //         const time = Date.now()
    //         const content = req.body.content
    //         const userid = req.user._id
    //         let comment = new Comment({
    //             time: time,
    //             content: content,
    //             post: postid,
    //             user: userid
    //         })
    //         const newcomment = await comment.save()
    //         let commentid = newcomment._id
    //         const newpost = await Post.findByIdAndUpdate(postid, {
    //             $push: {
    //                 comments: commentid
    //             }
    //         })
    //         res.status(200).json(newcomment)
    //     }
    //     catch {
    //         return res.status(400).json(err)
    //     }
    // }
}
module.exports = tutorController