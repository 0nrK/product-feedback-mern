const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/User.js")

const registerUser = async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json("Please add all fields")
    }

    const userExists = await User.findOne({ username: req.body.username })

    if (userExists) {
        res.status(400).json("User already exists")
    }


    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = await User.create({ username: req.body.username, password: hashedPassword })
    if (newUser) {
        res.status(201).json({
            username: newUser.username,
            token: generateToken(newUser.id),
        })
    } else {
        res.status(400).json("Invalid data!")
    }
}


const loginUser = async (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).json("Please add all fields")
    }

    const user = await User.findOne({ username: req.body.username })
    const comparedPw = await bcrypt.compare(req.body.password, user.password)
    if (user && comparedPw) {
        res.status(200).send({
            username: user.username,
            token: generateToken(user.id),
        })
    } else {
        res.status(500).json("Invalid credentials")
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

module.exports = { registerUser, loginUser }