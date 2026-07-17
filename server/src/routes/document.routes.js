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

const router = express.Router();

const {
  createDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument
} = require("../controllers/document.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createDocument);

router.get("/", authMiddleware, getAllDocuments);

router.get("/:id", authMiddleware, getDocumentById);

router.put("/:id", authMiddleware, updateDocument);

router.delete("/:id", authMiddleware, deleteDocument);


module.exports = router;