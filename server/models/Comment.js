const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "https://i.stack.imgur.com/l60Hf.png"
    },
    text: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model("Comment", CommentSchema);