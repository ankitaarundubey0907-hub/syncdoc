const express = require("express");

const router = express.Router();

const {
    createDocument,
    getAllDocuments,
    getDocumentById,
} = require("../controllers/document.controller");

// Create a document
router.post("/", createDocument);

// Get all documents
router.get("/", getAllDocuments);

// Get document by ID
router.get("/:id", getDocumentById);

module.exports = router;