const { mongoose, Schema } = require('mongoose')

const tutorpostSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    phonenumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    dob: {
        type: Date 
    },
    address: {
        type: String
    },
    intro: {
        type: String
    },
    job: {
        type: String
    },
    province: {
        type: String,
    },
    subjects: {
        type: [String],
    },
    time: {
        type: Date,
    },
    img: {
        type: String,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true }
);

let TutorPost = mongoose.model("TutorPost", tutorpostSchema);

module.exports = { TutorPost }