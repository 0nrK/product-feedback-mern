const jwt = require('jsonwebtoken');
const User = require('../models/User')


const verifyIsAdmin = async (req, res, next) => {
    console.log(req.headers)
    let token

    if (req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')) {
        try {

            token = req.headers.authorization.split(" ")[1]
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decodedToken.id).select("-password")
            console.log(req.user)
            next()
        } catch (err) {
            throw new Error("You are not authorized")

        }
    }

    if (!token) {
        throw new Error("You are not authorized (There is no token)")
    }
}

module.exports = { verifyIsAdmin }