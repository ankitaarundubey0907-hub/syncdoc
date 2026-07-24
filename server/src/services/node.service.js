const ASTNode = require("../models/ASTNode");

class NodeService {

    // Create AST Node
    async createNode(data) {

        const node = await ASTNode.create({
            document: data.document,
            nodeType: data.nodeType,
            value: data.value || "",
            parentNode: data.parentNode || null,
            order: data.order || 0,
        });

        // Add this node to parent's children array
        if (data.parentNode) {

            await ASTNode.findByIdAndUpdate(
                data.parentNode,
                {
                    $push: {
                        children: node._id
                    }
                }
            );

        }

        return node;

    }

    // Get Nodes of a Document
    async getNodes(documentId) {

        return await ASTNode.find({
            document: documentId
        })
        .populate("children")
        .sort({
            order: 1
        });

    }

    // Update AST Node
    async updateNode(nodeId, data) {

        const node = await ASTNode.findById(nodeId);

        if (!node) {
            throw new Error("Node not found.");
        }

        if (data.nodeType !== undefined)
            node.nodeType = data.nodeType;

        if (data.value !== undefined)
            node.value = data.value;

        if (data.order !== undefined)
            node.order = data.order;

        await node.save();

        return node;

    }

    // Delete AST Node
    async deleteNode(nodeId) {

        const node = await ASTNode.findById(nodeId);

        if (!node) {
            throw new Error("Node not found.");
        }

        // Remove node from parent
        if (node.parentNode) {

            await ASTNode.findByIdAndUpdate(
                node.parentNode,
                {
                    $pull: {
                        children: node._id
                    }
                }
            );

        }

        await ASTNode.findByIdAndDelete(nodeId);

        return {
            message: "Node deleted successfully."
        };

    }

}

module.exports = new NodeService();