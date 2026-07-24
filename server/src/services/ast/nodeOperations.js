class NodeOperations {

    // Find a node by ID
    findNode(root, nodeId) {

        if (!root) return null;

        if (root.id === nodeId) {
            return root;
        }

        if (!root.children) {
            return null;
        }

        for (const child of root.children) {

            const found = this.findNode(child, nodeId);

            if (found) {
                return found;
            }

        }

        return null;
    }

    // Add child node
    addNode(parent, node) {

        if (!parent.children) {
            parent.children = [];
        }

        parent.children.push(node);

        return parent;
    }

    // Update node
    updateNode(root, nodeId, data) {

        const node = this.findNode(root, nodeId);

        if (!node) {
            return null;
        }

        Object.assign(node, data);

        return node;
    }

    // Delete node
    deleteNode(root, nodeId) {

        if (!root.children) {
            return false;
        }

        const index = root.children.findIndex(
            child => child.id === nodeId
        );

        if (index !== -1) {

            root.children.splice(index, 1);

            return true;
        }

        for (const child of root.children) {

            const deleted = this.deleteNode(child, nodeId);

            if (deleted) {
                return true;
            }

        }

        return false;
    }

    // Move node
    moveNode(root, nodeId, newParentId) {

        const node = this.findNode(root, nodeId);

        if (!node) {
            return false;
        }

        this.deleteNode(root, nodeId);

        const parent = this.findNode(root, newParentId);

        if (!parent) {
            return false;
        }

        if (!parent.children) {
            parent.children = [];
        }

        parent.children.push(node);

        return true;
    }

}

module.exports = new NodeOperations();