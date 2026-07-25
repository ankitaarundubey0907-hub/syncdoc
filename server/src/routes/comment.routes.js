const express = require("express");

const router = express.Router();

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