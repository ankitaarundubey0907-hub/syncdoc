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

module.exports = router;