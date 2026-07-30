const express = require("express");

const router = express.Router();

<<<<<<< HEAD
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
=======
const authMiddleware = require("../middleware/auth.middleware");

const commentController = require("../controllers/comment.controller");

router.post(
    "/:documentId",
    authMiddleware,
    commentController.addComment
);

router.get(
    "/:documentId",
    authMiddleware,
    commentController.getComments
);

router.put(
    "/:commentId",
    authMiddleware,
    commentController.updateComment
);

router.delete(
    "/:commentId",
    authMiddleware,
    commentController.deleteComment
);

module.exports = router;
>>>>>>> a3f6a982307797257c7d666503f42bdc941950d5
