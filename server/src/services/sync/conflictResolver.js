const crdtService = require("./crdtService");

class ConflictResolver {

    /**
     * Apply remote update using Yjs
     */
    resolveRemoteUpdate(documentId, update) {

        try {

            crdtService.applyUpdate(documentId, update);

            return {
                success: true,
                message: "Remote update applied successfully."
            };

        } catch (error) {

            return {
                success: false,
                message: error.message
            };

        }

    }

    /**
     * Merge multiple updates
     */
    mergeUpdates(documentId, updates = []) {

        try {

            updates.forEach(update => {

                crdtService.applyUpdate(documentId, update);

            });

            return {
                success: true,
                content: crdtService.getContent(documentId)
            };

        } catch (error) {

            return {
                success: false,
                message: error.message
            };

        }

    }

    /**
     * Get latest document
     */
    getResolvedDocument(documentId) {

        return crdtService.getContent(documentId);

    }

}

module.exports = new ConflictResolver();