class RoomManager {

    joinRoom(socket, roomId) {

        socket.join(roomId);

    }

    leaveRoom(socket, roomId) {

        socket.leave(roomId);

    }

}

module.exports = new RoomManager();