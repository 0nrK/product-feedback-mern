const Product = require("../models/Product.js")
const User = require("../models/User.js")
const { v4: uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose")


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
            .populate({ path: "comments", populate: { path: "user_id" } })
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

const addPost = async (req, res) => {
    console.log(req.body);
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
        const product = Product.findById(req.params.id).populate({ path: "comments", populate: { path: "user_id" } })
        await product.deleteOne()
    } catch (err) {
        res.status(500).json(err)
    }
}

const addComment = async (req, res) => {
    const { postID, text, user } = req.body.commentData
    try {
        const decodedToken = await jwt.verify(user.token, process.env.JWT_SECRET)
        Product.findById(postID)
            .then((mainPost) => {
                if (!mainPost) return res.status(404).json("Post could not found")
                const comment = {
                    text,
                    user_id: decodedToken.id.toString()
                }
                mainPost.comments.push(comment)
                mainPost.save()
                    .then((updatedPost) => {
                        updatedPost.populate({ path: "comments", populate: { path: "user_id" } })
                            .then((finalPost) => {
                                return res.status(200).send(finalPost)
                            })
                    })
                    .catch((err) => console.log(err))
            })


    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteComment = async (req, res) => {


    try {
        Product.findById(req.params.id)
            .then((mainPost) => {
                if (!mainPost) return res.status(404).json("Post Not Found!")
                mainPost.comments = mainPost.comments.filter((comment) => comment._id?.toString() !== req.params.commentID)
                mainPost.save()
                    .then((updatedPost) => {
                        updatedPost.populate({ path: "comments", populate: { path: "user_id" } })
                            .then((finalPost) => {
                                return res.status(200).send(finalPost)
                            })
                    })
                    .catch((err) => console.error(err))
            })
    } catch (err) {
        res.status(500).json(err)
    }

}

module.exports = { getAll, getById, addPost, deleteById, deleteComment, addComment }