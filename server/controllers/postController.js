const Product = require("../models/Product.js")
const User = require("../models/User.js")
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const Comment = require("../models/Comment.js");

const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getById = async (req, res) => {
    console.log("a.");
    try {
        const post = await Product.findById(req.params.id).populate("comments")
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
    const { postID, text, user: userReq } = req.body.commentData

    try {
        const decodedToken = jwt.verify(userReq.token, process.env.JWT_SECRET)
        const user = await User.findById(decodedToken.id)
        const post = await Product.findById(postID)

        const comment = new Comment({
            user: user.username,
            photo: user.profilePhoto,
            text: text
        })

        const savedComment = await comment.save()
        post.comments.push(savedComment._id)
        const updatedPost = await post.save()
        console.log(updatedPost);
        res.status(200).json("basarili")
    } catch (err) {
        console.log(err)
    }
}

const deleteComment = async (req, res) => {
    console.log(req.params)

    try {
        const post = await Product.findByIdAndUpdate(req.params.id,
            { $pull: { "comments": req.params.commentID } }
        )


        if (!post) {
            return res.status(400).send("Post not found");
        }
        await post.save()
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }

}

module.exports = { getAll, getById, addPost, deleteById, deleteComment, addComment }