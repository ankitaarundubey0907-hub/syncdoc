const commentService = require("../services/comment.service");

class CommentController {

    // Add Comment
    async addComment(req, res) {

        try {

            const comment = await commentService.addComment(
                req.params.documentId,
                req.user.id,
                req.body.comment
            );

            res.status(201).json({
                success: true,
                message: "Comment added successfully.",
                data: comment,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Get Comments
    async getComments(req, res) {

        try {

            const comments = await commentService.getComments(
                req.params.documentId,
                req.user.id
            );

            res.status(200).json({
                success: true,
                data: comments,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Update Comment
    async updateComment(req, res) {

        try {

            const comment = await commentService.updateComment(
                req.params.commentId,
                req.user.id,
                req.body.comment
            );

            res.status(200).json({
                success: true,
                message: "Comment updated successfully.",
                data: comment,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Delete Comment
    async deleteComment(req, res) {

        try {

            const result = await commentService.deleteComment(
                req.params.commentId,
                req.user.id
            );

            res.status(200).json({
                success: true,
                message: result.message,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

}

module.exports = new CommentController();