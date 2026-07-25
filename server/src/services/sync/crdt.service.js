const Y = require("yjs");

class CRDTService {

    constructor() {

        this.documents = new Map();

    }

    /**
     * Create or get existing Y.Doc
     */
    getDocument(documentId) {

        if (!this.documents.has(documentId)) {

            const doc = new Y.Doc();

            this.documents.set(documentId, doc);

        }

        return this.documents.get(documentId);

    }

    /**
     * Get shared text
     */
    getSharedText(documentId) {

        const doc = this.getDocument(documentId);

        return doc.getText("content");

    }

    /**
     * Insert text
     */
    insert(documentId, index, text) {

        const ytext = this.getSharedText(documentId);

        ytext.insert(index, text);

    }

    /**
     * Delete text
     */
    delete(documentId, index, length) {

        const ytext = this.getSharedText(documentId);

        ytext.delete(index, length);

    }

    /**
     * Read content
     */
    getContent(documentId) {

        const ytext = this.getSharedText(documentId);

        return ytext.toString();

    }

    /**
     * Encode document state
     */
    encodeState(documentId) {

        const doc = this.getDocument(documentId);

        return Y.encodeStateAsUpdate(doc);

    }

    /**
     * Apply remote update
     */
    applyUpdate(documentId, update) {

        const doc = this.getDocument(documentId);

        Y.applyUpdate(doc, update);

    }

}

module.exports = new CRDTService();