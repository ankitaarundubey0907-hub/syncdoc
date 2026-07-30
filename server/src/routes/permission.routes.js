const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const permissionController = require("../controllers/permission.controller");

router.get(
    "/read/:documentId",
    authMiddleware,
    permissionController.canRead
);

router.get(
    "/write/:documentId",
    authMiddleware,
    permissionController.canWrite
);

router.post(
    "/:documentId/collaborator",
    authMiddleware,
    permissionController.addCollaborator
);

router.delete(
    "/:documentId/collaborator",
    authMiddleware,
    permissionController.removeCollaborator
);

module.exports = router;