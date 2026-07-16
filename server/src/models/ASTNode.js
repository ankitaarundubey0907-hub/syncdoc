const mongoose = require("mongoose");

const astNodeSchema = new mongoose.Schema({
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true,
    },

    nodeType: {
        type: String,
        required: true,
        trim: true,
    },

    value: {
        type: String,
        default: "",
    },

    parentNode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ASTNode",
        default: null,
    },

    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ASTNode",
    }, ],

    order: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("ASTNode", astNodeSchema);