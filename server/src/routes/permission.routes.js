const express = require("express");
const router = express.Router();

const {
  shareDocument,
  updatePermission,
  removePermission
} = require("../controllers/permission.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/share", authMiddleware, shareDocument);

router.put("/:id", authMiddleware, updatePermission);

router.delete("/:id", authMiddleware, removePermission);

module.exports = router;