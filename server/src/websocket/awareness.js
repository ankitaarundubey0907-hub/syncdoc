class Awareness {

    constructor() {

        this.cursors = new Map();

    }

    updateCursor(documentId, socketId, cursor) {

        if (!this.cursors.has(documentId)) {

            this.cursors.set(documentId, new Map());

        }

        this.cursors
            .get(documentId)
            .set(socketId, cursor);

    }

    getCursor(documentId) {

        return this.cursors.get(documentId) || new Map();

    }

}

module.exports = new Awareness();