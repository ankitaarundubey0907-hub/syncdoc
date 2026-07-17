const express = require("express");


const router = express.Router();

const {
    createComment,
    getAllComments,
    getCommentsByDocument,
} = require("../controllers/comment.controller");

// Create a comment
router.post("/", createComment);

// Get all comments
router.get("/", getAllComments);

// Get comments of a specific document
router.get("/document/:documentId", getCommentsByDocument);
const router = express.Router();

const {
  addComment,
  getComments,
  deleteComment
} = require("../controllers/comment.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, addComment);

router.get("/:documentId", authMiddleware, getComments);

router.delete("/:id", authMiddleware, deleteComment);


module.exports = router;