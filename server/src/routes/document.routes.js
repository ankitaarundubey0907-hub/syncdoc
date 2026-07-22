const express = require("express");

const router = express.Router();

const {
  createDocument,
  getAllDocuments,
  getDocumentById,
} = require("../controllers/document.controller");

const authMiddleware = require("../middleware/auth.middleware");

// Create document
router.post("/", authMiddleware, createDocument);

// Get all documents
router.get("/", authMiddleware, getAllDocuments);

// Get document by ID
router.get("/:id", authMiddleware, getDocumentById);

module.exports = router;
