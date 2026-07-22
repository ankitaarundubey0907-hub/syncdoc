const express = require("express");

const router = express.Router();

const {
  createComment,
  getAllComments,
  getCommentsByDocument,
} = require("../controllers/comment.controller");

// Create comment
router.post("/", createComment);

// Get all comments
router.get("/", getAllComments);

// Get comments by document
router.get("/document/:documentId", getCommentsByDocument);

module.exports = router;
