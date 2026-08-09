const activityRoutes = require("./routes/activity.routes");
const permissionRoutes = require("./routes/permission.routes");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes

const authRoutes = require("./routes/auth.routes");
const documentRoutes = require("./routes/document.routes");
const commentRoutes = require("./routes/comment.routes");
const versionRoutes = require("./routes/version.routes");

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to SyncDoc Backend API"
    });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/version", versionRoutes);
app.use("/api/activity", activityRoutes);

module.exports = app;