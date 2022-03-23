const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const cors = require('cors');

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB")
    }
);

app.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.get("/product/:id", async (req, res) => {
    try {
        const post = await Product.findById(req.params.id)
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post("/addproduct", async (req, res) => {
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
})

app.post("/addcomment", async (req, res) => {
    const comment = req.body.text
    const id = req.body.id
    try {
        Product.findByIdAndUpdate(
            { _id: id },
            { $push: { comments: comment } },
            function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            }
        )
        res.status(200).json("Success!")
    } catch (err) {
        res.status(500).json(err)
    }
})

app.delete("/:id", async (req, res) => {
    try {
        const product = Product.findById(req.params.id)
        await product.deleteOne()
    } catch (err) {
        res.status(500).json(err)
    }
})

app.listen(5000, () => {
    console.log("server is running")
})
