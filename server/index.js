const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const cors = require('cors');

const app = express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.options('*', cors())

app.use(cors())

/* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}) */

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to MongoDB")
    }
);


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

app.use("/post", require("./routes/postRoute.js"))
app.use("/auth", require("./routes/authRoute.js"))


app.listen(5000, () => {
    console.log("server is running")
})
