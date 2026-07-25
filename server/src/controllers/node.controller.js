const nodeService = require("../services/node.service");

// Create Node
exports.createNode = async (req, res) => {

    try {

        const node = await nodeService.createNode(req.body);

        res.status(201).json({
            success: true,
            data: node,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

// Get Nodes
exports.getNodes = async (req, res) => {

    try {

        const nodes = await nodeService.getNodes(
            req.params.documentId
        );

        res.status(200).json({
            success: true,
            data: nodes,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

// Update Node
exports.updateNode = async (req, res) => {

    try {

        const node = await nodeService.updateNode(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            data: node,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

// Delete Node
exports.deleteNode = async (req, res) => {

    try {

        const result = await nodeService.deleteNode(
            req.params.id
        );

        res.status(200).json({
            success: true,
            message: result.message,
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};