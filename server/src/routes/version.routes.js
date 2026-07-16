const express = require("express");
const router = express.Router();

const {
  saveVersion,
  getVersions,
  restoreVersion
} = require("../controllers/version.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/:documentId", authMiddleware, saveVersion);

router.get("/:documentId", authMiddleware, getVersions);

router.post("/restore/:versionId", authMiddleware, restoreVersion);

module.exports = router;