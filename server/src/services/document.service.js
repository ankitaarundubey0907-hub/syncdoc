const Document = require("../models/Document");
const permissionService = require("./permission.service");

class DocumentService {

    /**
     * Create Document
     */
    async createDocument(userId, data) {

        const document = await Document.create({
            title: data.title,
            content: data.content || "",
            owner: userId,
            collaborators: [],
            isPublic: false
        });

        return document;

    }

    /**
     * Get Document By Id
     */
    async getDocument(documentId, userId) {

        const canRead = await permissionService.canRead(
            documentId,
            userId
        );

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        return await Document.findById(documentId)
            .populate("owner", "username email")
            .populate("collaborators.user", "username email");

    }

    /**
     * Update Document
     */
    async updateDocument(documentId, userId, data) {

        const canWrite = await permissionService.canWrite(
            documentId,
            userId
        );

        if (!canWrite) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        if (data.title !== undefined) {
            document.title = data.title;
        }

        if (data.content !== undefined) {
            document.content = data.content;
        }

        if (typeof data.isPublic === "boolean") {
            document.isPublic = data.isPublic;
        }

        await document.save();

        return document;

    }

    /**
     * Delete Document
     */
    async deleteDocument(documentId, userId) {

        const isOwner = await permissionService.isOwner(
            documentId,
            userId
        );

        if (!isOwner) {
            throw new Error("Only owner can delete document.");
        }

        await Document.findByIdAndDelete(documentId);

        return {
            message: "Document deleted successfully."
        };

    }

    /**
     * Get User Documents
     */
    async getUserDocuments(userId) {

        return await Document.find({
            $or: [
                { owner: userId },
                { "collaborators.user": userId }
            ]
        })
        .populate("owner", "username email")
        .sort({ updatedAt: -1 });

    }

    /**
     * Search Documents
     */
    async searchDocuments(userId, keyword) {

        return await Document.find({
            $and: [
                {
                    $or: [
                        { owner: userId },
                        { collaborators: userId },
                        { isPublic: true }
                    ]
                },
                {
                    $or: [
                        {
                            title: {
                                $regex: keyword,
                                $options: "i"
                            }
                        },
                        {
                            content: {
                                $regex: keyword,
                                $options: "i"
                            }
                        }
                    ]
                }
            ]
        });

    }

}

module.exports = new DocumentService();