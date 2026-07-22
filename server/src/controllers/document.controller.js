const Document = require("../models/Document");

// Create a new document
const createDocument = async(req, res) => {
    try {
        const { title, content } = req.body;

        const document = await Document.create({
            title,
            content,
        });

        res.status(201).json({
            success: true,
            message: "Document created successfully",
            data: document,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get all documents
const getAllDocuments = async(req, res) => {
    try {
        const documents = await Document.find();

        res.status(200).json({
            success: true,
            data: documents,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get a document by ID
const getDocumentById = async(req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                success: false,
                message: "Document not found",
            });
        }

        res.status(200).json({
            success: true,
            data: document,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
};