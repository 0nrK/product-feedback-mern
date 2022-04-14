const mongoose = require('mongoose')
const User = require('./User')


const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productDesc: {
        type: String,
        required: true,
        min: 3
    },
    productTags: {
        type: String
    },
    upVote: {
        type: Number,
        default: 0
    },
    comments: [{
        text: String,
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    }]
},
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)