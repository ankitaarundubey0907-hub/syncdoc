const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
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

    socketId: {
        type: String,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    joinedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Session", sessionSchema);