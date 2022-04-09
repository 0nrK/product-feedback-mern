const Product = require("../models/Product.js")
const User = require("../models/User.js")
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken")

const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getById = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

const addPost = async (req, res) => {
    try {

        const newProduct = new Product({
            productName: req.body.menuValues.productName,
            productDesc: req.body.menuValues.productDesc,
            productTags: req.body.menuValues.productTags
        })
        const savedProduct = await newProduct.save()

        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteById = async (req, res) => {
    try {
        const product = Product.findById(req.params.id)
        await product.deleteOne()
    } catch (err) {
        res.status(500).json(err)
    }
}

const addComment = async (req, res) => {
    console.log(req.body.user.token)
    console.log(req)
    try {
        const post = await Product.findById(req.params.id)
        const decodedToken = jwt.verify(req.body.user.token, process.env.JWT_SECRET)
        const user = await User.findById(decodedToken.id)
        const comment = { id: uuidv4(), username: user.username, profilePhoto: user.profilePhoto || "https://i.stack.imgur.com/l60Hf.png", comment: req.body.text }
        post.comments.push(comment)

        const updatedPost = await Product.findByIdAndUpdate(req.params.id, post, { new: true });
        res.status(200).json(updatedPost)
    } catch (err) {
        console.log(err)
    }
}

const deleteComment = async (req, res) => {
    try {
        const post = await Product.findById(req.params.id)
        const filteredComments = post.comments.filter((el) => (el.id !== req.params.commentID))

        const updatedPost = await Product.findByIdAndUpdate(req.params.id, { ...rest, comments: filteredComments }, { new: true })
        console.log(updatedPost)
        res.status(200).json(updatedPost)
    } catch (err) {
        res.status(500).json(err)
    }

}

module.exports = { getAll, getById, addPost, deleteById, deleteComment, addComment }