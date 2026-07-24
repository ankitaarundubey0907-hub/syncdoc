const documentService = require("../services/document.service");

class DocumentController {

    // Create Document
    async createDocument(req, res) {
        try {

            const document = await documentService.createDocument(
                req.user.id,
                req.body
            );

            res.status(201).json({
                success: true,
                message: "Document created successfully.",
                data: document,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }
    }

    // Get Single Document
    async getDocument(req, res) {
        try {

            const document = await documentService.getDocument(
                req.params.id,
                req.user.id
            );

            res.status(200).json({
                success: true,
                data: document,
            });

        } catch (error) {

            res.status(404).json({
                success: false,
                message: error.message,
            });

        }
    }

    // Update Document
    async updateDocument(req, res) {
        try {

            const document = await documentService.updateDocument(
                req.params.id,
                req.user.id,
                req.body
            );

            res.status(200).json({
                success: true,
                message: "Document updated successfully.",
                data: document,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }
    }

    // Delete Document
    async deleteDocument(req, res) {
        try {

            const result = await documentService.deleteDocument(
                req.params.id,
                req.user.id
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
    }

    // Get My Documents
    async getUserDocuments(req, res) {
        try {

            const documents = await documentService.getUserDocuments(
                req.user.id
            );

            res.status(200).json({
                success: true,
                data: documents,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }
    }

    // Search Documents
    async searchDocuments(req, res) {
        try {

            const documents = await documentService.searchDocuments(
                req.user.id,
                req.query.keyword
            );

            res.status(200).json({
                success: true,
                data: documents,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }
    }

}

module.exports = new DocumentController();