const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const userController = require("../controllers/user.controller");

router.get("/", authMiddleware, userController.getAllUsers);

router.get("/:id", authMiddleware, userController.getUserById);

router.delete("/:id", authMiddleware, userController.deleteUser);

module.exports = router;