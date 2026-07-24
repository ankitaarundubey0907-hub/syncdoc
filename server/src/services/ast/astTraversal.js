class ASTTraversal {

    /**
     * Depth First Traversal (DFS)
     */
    traverse(node, callback) {

        if (!node) return;

        callback(node);

        if (node.children && node.children.length > 0) {

            for (const child of node.children) {
                this.traverse(child, callback);
            }

        }
    }

    /**
     * Find node by ID
     */
    findNode(node, nodeId) {

        if (!node) return null;

        if (node.id === nodeId) {
            return node;
        }

        if (!node.children) {
            return null;
        }

        for (const child of node.children) {

            const result = this.findNode(child, nodeId);

            if (result) {
                return result;
            }

        }

        return null;
    }

    /**
     * Find all nodes of a specific type
     */
    findByType(node, type) {

        const nodes = [];

        this.traverse(node, (currentNode) => {

            if (currentNode.type === type) {
                nodes.push(currentNode);
            }

        });

        return nodes;
    }

    /**
     * Count total nodes
     */
    countNodes(node) {

        let count = 0;

        this.traverse(node, () => {
            count++;
        });

        return count;
    }

    /**
     * Convert AST into a flat array
     */
    flatten(node) {

        const result = [];

        this.traverse(node, (currentNode) => {
            result.push(currentNode);
        });

        return result;
    }

}

module.exports = new ASTTraversal();