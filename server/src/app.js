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

const authRoutes = require("./routes/auth.routes");

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to SyncDoc Backend API"
    });
});

// Future Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/documents", documentRoutes);

app.use("/api/auth", authRoutes);

module.exports = app;