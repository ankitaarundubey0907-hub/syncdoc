const { Server } = require("socket.io");
const registerSocketEvents = require("./socketEvents");

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`Client Connected: ${socket.id}`);

        registerSocketEvents(io, socket);

        socket.on("disconnect", () => {
            console.log(`Client Disconnected: ${socket.id}`);
        });
    });

    return io;
}

module.exports = {
    initializeSocket
};