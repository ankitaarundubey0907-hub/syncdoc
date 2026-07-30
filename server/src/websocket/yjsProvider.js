const Y = require("yjs");

class YjsProvider {

    constructor() {

        this.documents = new Map();

    }

    getDocument(documentId) {

        if (!this.documents.has(documentId)) {

            this.documents.set(
                documentId,
                new Y.Doc()
            );

        }

        return this.documents.get(documentId);

    }

    applyUpdate(documentId, update) {

        const doc = this.getDocument(documentId);

        Y.applyUpdate(doc, update);

    }

    getState(documentId) {

        const doc = this.getDocument(documentId);

        return Y.encodeStateAsUpdate(doc);

    }

}

module.exports = new YjsProvider();