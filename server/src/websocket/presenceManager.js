class PresenceManager {

    constructor() {

        this.rooms = new Map();

    }

    addUser(roomId, socketId, user) {

        if (!this.rooms.has(roomId)) {

            this.rooms.set(roomId, new Map());

        }

        this.rooms
            .get(roomId)
            .set(socketId, user);

    }

    removeUser(roomId, socketId) {

        if (!this.rooms.has(roomId)) return;

        this.rooms
            .get(roomId)
            .delete(socketId);

    }

    removeSocket(socketId) {

        for (const room of this.rooms.values()) {

            room.delete(socketId);

        }

    }

    getUsers(roomId) {

        if (!this.rooms.has(roomId)) {

            return [];

        }

        return [...this.rooms.get(roomId).values()];

    }

}

module.exports = new PresenceManager();