const Comment = require("../models/Comment");
const permissionService = require("./permission.service");
const activityService = require("./activity.service");

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

        await activityService.log(
    documentId,
    userId,
    "COMMENT_ADDED",
    "Comment added"
);

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

        await activityService.log(
    comment.document,
    userId,
    "COMMENT_UPDATED",
    "Comment updated"
);


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

        await activityService.log(
    comment.document,
    userId,
    "COMMENT_DELETED",
    "Comment deleted"
);

        return {
            message: "Comment deleted successfully."
        };
    }

}

module.exports = new CommentService();