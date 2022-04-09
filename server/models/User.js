const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        default: false,
    },
    profilePhoto: {
        type: String,
        default: "https://i.stack.imgur.com/l60Hf.png"
    }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)