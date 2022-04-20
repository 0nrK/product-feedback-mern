const express = require('express');
const { getAll, addComment, deleteComment, getById, addPost, deleteById } = require('../controllers/postController');
const { verifyIsAdmin } = require('../middleware/verifyIsAdmin.js');
const router = express.Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", verifyIsAdmin, addPost)
router.delete("/:id", deleteById)

//comments
router.post("/:id/comment", addComment)
router.delete("/:id/comment/:commentID", deleteComment)


module.exports = router