const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const documentController = require("../controllers/document.controller");

// Create Document
router.post(
    "/",
    authMiddleware,
    documentController.createDocument
);

// Get My Documents
router.get(
    "/",
    authMiddleware,
    documentController.getUserDocuments
);

// Search Documents
router.get(
    "/search",
    authMiddleware,
    documentController.searchDocuments
);

// Get Single Document
router.get(
    "/:id",
    authMiddleware,
    documentController.getDocument
);

// Update Document
router.put(
    "/:id",
    authMiddleware,
    documentController.updateDocument
);

// Delete Document
router.delete(
    "/:id",
    authMiddleware,
    documentController.deleteDocument
);

module.exports = router;