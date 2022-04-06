const express = require('express');
const { getAll, getById, addPost, deleteById } = require('../controllers/postController');
const router = express.Router()


router.get("/", getAll)
router.get("/:id", getById)
router.post("/", addPost)
router.delete("/:id", deleteById)


module.exports = router