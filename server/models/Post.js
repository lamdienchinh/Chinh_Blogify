const { mongoose, Schema } = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    time: {
        type: Date,
        require: true
    },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true }
);

const commentSchema = new mongoose.Schema({
    time: Date,
    content: String,
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

let Post = mongoose.model("Post", postSchema);
let Comment = mongoose.model("Comment", commentSchema);
module.exports = {Post, Comment}