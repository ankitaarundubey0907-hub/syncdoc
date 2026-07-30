
const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const exportController = require("../controllers/export.controller");

router.get(
    "/pdf/:documentId",
    authMiddleware,
    exportController.exportPDF
);

router.get(
    "/html/:documentId",
    authMiddleware,
    exportController.exportHTML
);

router.get(
    "/markdown/:documentId",
    authMiddleware,
    exportController.exportMarkdown
);

module.exports = router;