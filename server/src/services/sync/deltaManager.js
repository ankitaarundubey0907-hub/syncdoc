const Y = require("yjs");
const crdtService = require("./crdtService");

class DeltaManager {

    constructor() {
        this.listeners = new Map();
    }

    /**
     * Start listening for document changes
     */
    observe(documentId, callback) {

        const doc = crdtService.getDocument(documentId);

        if (this.listeners.has(documentId)) {
            return;
        }

        const updateHandler = (update, origin) => {

            callback({
                documentId,
                update,
                origin,
                timestamp: Date.now()
            });

        };

        doc.on("update", updateHandler);

        this.listeners.set(documentId, updateHandler);
    }

    /**
     * Stop listening
     */
    unobserve(documentId) {

        const doc = crdtService.getDocument(documentId);

        const handler = this.listeners.get(documentId);

        if (!handler) return;

        doc.off("update", handler);

        this.listeners.delete(documentId);
    }

    /**
     * Apply incoming delta
     */
    applyDelta(documentId, update) {

        crdtService.applyUpdate(documentId, update);

    }

    /**
     * Encode current document state
     */
    exportState(documentId) {

        return crdtService.encodeState(documentId);

    }

}

module.exports = new DeltaManager();