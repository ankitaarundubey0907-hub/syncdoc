const express = require("express");
const router = express.Router();

const {
  createNode,
  getNodes,
  updateNode,
  deleteNode
} = require("../controllers/node.controller");

const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createNode);

router.get("/:documentId", authMiddleware, getNodes);

router.put("/:id", authMiddleware, updateNode);

router.delete("/:id", authMiddleware, deleteNode);

module.exports = router;