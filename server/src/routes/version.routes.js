const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const versionController = require("../controllers/version.controller");

router.post(
    "/:documentId",
    authMiddleware,
    versionController.createVersion
);

router.get(
    "/:documentId",
    authMiddleware,
    versionController.getVersions
);

router.get(
    "/single/:versionId",
    authMiddleware,
    versionController.getVersion
);

module.exports = router;