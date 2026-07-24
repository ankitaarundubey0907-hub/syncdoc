const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    action: {
        type: String,
        enum: [
            "DOCUMENT_CREATED",
            "DOCUMENT_UPDATED",
            "DOCUMENT_DELETED",
            "COMMENT_ADDED",
            "COMMENT_UPDATED",
            "COMMENT_DELETED",
            "PERMISSION_CHANGED",
            "USER_JOINED",
            "USER_LEFT",
        ],
        required: true,
    },

    description: {
        type: String,
        default: "",
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("ActivityLog", activityLogSchema);