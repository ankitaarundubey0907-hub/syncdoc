const { Server } = require("socket.io");
const registerSocketEvents = require("./socketEvents");

function initializeSocket(server) {

    const io = new Server(server, {

        cors: {

            origin: process.env.CLIENT_URL || "http://localhost:5173",

            credentials: true

        }

    });

    io.on("connection", socket => {

        console.log("Socket Connected:", socket.id);

        registerSocketEvents(io, socket);

    });

    return io;

}

module.exports = initializeSocket;