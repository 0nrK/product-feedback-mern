const mongoose = require('mongoose')
const Comment = require('./Comment')



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
        default: [],
        ref: 'Comment',
        type: mongoose.Schema.Types.ObjectId
    }]
},
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)