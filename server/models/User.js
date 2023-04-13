const { mongoose, Schema } = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 40
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phonenumber: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    dob: {
        type: Date,
    },
    admin: {
        type: Boolean,
        default: false
    },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    // tutorpost: { type: Schema.Types.ObjectId, ref: 'TutorPost'}
}, { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); 