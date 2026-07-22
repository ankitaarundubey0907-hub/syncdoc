const Comment = require("../models/Comment");

// Create a new comment
const createComment = async(req, res) => {
    try {
        const { document, user, comment } = req.body;

        const newComment = await Comment.create({
            document,
            user,
            comment,
        });

        res.status(201).json({
            success: true,
            message: "Comment added successfully",
            data: newComment,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get all comments
const getAllComments = async(req, res) => {
    try {
        const comments = await Comment.find()
            .populate("user", "name email")
            .populate("document", "title");

        res.status(200).json({
            success: true,
            data: comments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get comments of a specific document
const getCommentsByDocument = async(req, res) => {
    try {
        const comments = await Comment.find({
            document: req.params.documentId,
        }).populate("user", "name email");

        res.status(200).json({
            success: true,
            data: comments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createComment,
    getAllComments,
    getCommentsByDocument,
};