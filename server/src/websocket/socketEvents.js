const roomManager = require("./roomManager");
const presenceManager = require("./presenceManager");
const awareness = require("./awareness");
const yjsProvider = require("./yjsProvider");

module.exports = (io, socket) => {

    socket.on("join-document", ({ documentId, user }) => {

        roomManager.joinRoom(socket, documentId);

        presenceManager.addUser(documentId, socket.id, user);

        socket.emit(
            "document-users",
            presenceManager.getUsers(documentId)
        );

        socket.to(documentId).emit(
            "user-joined",
            user
        );

    });

    socket.on("leave-document", ({ documentId, user }) => {

        roomManager.leaveRoom(socket, documentId);

        presenceManager.removeUser(documentId, socket.id);

        socket.to(documentId).emit(
            "user-left",
            user
        );

    });

    socket.on("document-update", ({ documentId, update }) => {

        socket.to(documentId).emit(
            "document-update",
            update
        );

    });

    socket.on("cursor-update", ({ documentId, cursor }) => {

        awareness.updateCursor(
            documentId,
            socket.id,
            cursor
        );

        socket.to(documentId).emit(
            "cursor-update",
            {
                socketId: socket.id,
                cursor
            }
        );

    });

    socket.on("disconnect", () => {

        presenceManager.removeSocket(socket.id);

    });

};