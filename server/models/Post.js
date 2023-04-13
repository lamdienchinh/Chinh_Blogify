const { mongoose, Schema } = require('mongoose')

const postSchema = new mongoose.Schema({
    phonenumber: {
        type: String,
        require: true
    },
    province: {
        type: Object,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
    numsession: {
        type: Number    
    },
    studentgender: {
        type: String
    },
    studentnum: {
        type: Number
    },
    subject: {
        type: String
    },
    summary: {
        type: String,
    },
    tutorgender: {
        type: String,
    },
    differ: {
        type: String,
    },
    datestart: {
        type: Date,
    },
    time: {
        type: Date,
    },
    avt: {
        type: String,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true }
);

let Post = mongoose.model("Post", postSchema);

module.exports = { Post }