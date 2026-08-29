const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: process.env.CLIENT_URL || "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);

        // User joins a specific document room
        socket.on("join-document", (documentId) => {
            socket.join(`document-${documentId}`);

            console.log(
                `User ${socket.id} joined document-${documentId}`
            );
        });

        // Receive document changes
        socket.on("document-change", ({ documentId, title, content }) => {
            // Send changes to everyone else in the same document
            socket.to(`document-${documentId}`).emit("document-update", {
                title,
                content,
            });
        });

        socket.on("disconnect", () => {
            console.log(`User Disconnected: ${socket.id}`);
        });
    });

    return io;
};

const getIO = () => {
    if (!io) {
        throw new Error("Socket.io is not initialized.");
    }

    return io; //ok
};

module.exports = {
    initializeSocket,
    getIO,
};