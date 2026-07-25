class BlockLockManager {

    constructor() {
        // documentId -> Map(blockId -> lockInfo)
        this.documentLocks = new Map();
    }

    /**
     * Lock a block
     */
    lockBlock(documentId, blockId, userId) {

        if (!this.documentLocks.has(documentId)) {
            this.documentLocks.set(documentId, new Map());
        }

        const locks = this.documentLocks.get(documentId);

        if (locks.has(blockId)) {

            return {
                success: false,
                message: "Block is already locked."
            };

        }

        locks.set(blockId, {
            userId,
            lockedAt: new Date()
        });

        return {
            success: true,
            message: "Block locked successfully."
        };

    }

    /**
     * Unlock block
     */
    unlockBlock(documentId, blockId, userId) {

        if (!this.documentLocks.has(documentId)) {
            return false;
        }

        const locks = this.documentLocks.get(documentId);

        const lock = locks.get(blockId);

        if (!lock) {
            return false;
        }

        if (lock.userId !== userId) {
            return false;
        }

        locks.delete(blockId);

        return true;

    }

    /**
     * Check if locked
     */
    isLocked(documentId, blockId) {

        if (!this.documentLocks.has(documentId)) {
            return false;
        }

        return this.documentLocks
            .get(documentId)
            .has(blockId);

    }

    /**
     * Get lock owner
     */
    getLockOwner(documentId, blockId) {

        if (!this.documentLocks.has(documentId)) {
            return null;
        }

        return this.documentLocks
            .get(documentId)
            .get(blockId);

    }

    /**
     * Get all locks
     */
    getDocumentLocks(documentId) {

        if (!this.documentLocks.has(documentId)) {
            return [];
        }

        return [...this.documentLocks
            .get(documentId)
            .entries()];

    }

    /**
     * Remove all locks
     */
    clearDocumentLocks(documentId) {

        this.documentLocks.delete(documentId);

    }

}

module.exports = new BlockLockManager();