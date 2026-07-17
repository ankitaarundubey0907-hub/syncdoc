const roomManager = require("./roomManager");
const presenceManager = require("./presenceManager");
const awareness = require("./awareness");

module.exports = (io, socket) => {

    socket.on("join-document", (documentId) => {
        roomManager.joinRoom(socket, documentId);
    });

    socket.on("leave-document", (documentId) => {
        roomManager.leaveRoom(socket, documentId);
    });

    socket.on("cursor-move", (data) => {
        awareness.updateCursor(io, socket, data);
    });

    socket.on("typing", (data) => {
        awareness.userTyping(io, socket, data);
    });

};