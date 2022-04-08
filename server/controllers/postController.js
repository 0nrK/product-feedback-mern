const Product = require("../models/Product.js")


const getAll = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
        console.log(products)
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

module.exports = { getAll, getById, addPost, deleteById }