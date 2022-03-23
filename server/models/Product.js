const mongoose = require('mongoose')

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
    comments: {
        type: Array
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)