const Comment = require("../models/comment.model");
const permissionService = require("./permission.service");

class CommentService {

    async addComment(documentId, userId, commentText) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const comment = await Comment.create({
            document: documentId,
            user: userId,
            comment: commentText
        });

        return comment;
    }

    async getComments(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        return await Comment.find({
            document: documentId
        })
        .populate("user", "username email")
        .sort({ createdAt: 1 });

    }

    async updateComment(commentId, userId, commentText) {

        const comment = await Comment.findById(commentId);

        if (!comment) {
            throw new Error("Comment not found.");
        }

        if (comment.user.toString() !== userId.toString()) {
            throw new Error("Permission denied.");
        }

        comment.comment = commentText;

        await comment.save();

        return comment;
    }

    async deleteComment(commentId, userId) {

        const comment = await Comment.findById(commentId);

        if (!comment) {
            throw new Error("Comment not found.");
        }

        if (comment.user.toString() !== userId.toString()) {
            throw new Error("Permission denied.");
        }

        await Comment.findByIdAndDelete(commentId);

        return {
            message: "Comment deleted successfully."
        };
    }

}

module.exports = new CommentService();