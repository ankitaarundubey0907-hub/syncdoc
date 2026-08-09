const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const activityController = require("../controllers/activity.controller");

router.get(
    "/document/:documentId",
    authMiddleware,
    activityController.getDocumentActivity
);

router.get(
    "/user",
    authMiddleware,
    activityController.getUserActivity
);

module.exports = router;