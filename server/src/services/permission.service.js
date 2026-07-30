const Document = require("../models/document.model");

class PermissionService {

    // Check Owner
    async isOwner(documentId, userId) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        return document.owner.toString() === userId.toString();

    }

    // Check Collaborator
    async isCollaborator(documentId, userId) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        return document.collaborators.some(
            collaborator =>
                collaborator.user.toString() === userId.toString()
        );

    }

    // Check Read Permission
    async canRead(documentId, userId) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        if (document.isPublic) {
            return true;
        }

        if (document.owner.toString() === userId.toString()) {
            return true;
        }

        return document.collaborators.some(
            collaborator =>
                collaborator.user.toString() === userId.toString()
        );

    }

    // Check Write Permission
    async canWrite(documentId, userId) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        if (document.owner.toString() === userId.toString()) {
            return true;
        }

        return document.collaborators.some(
            collaborator =>
                collaborator.user.toString() === userId.toString() &&
                collaborator.role === "editor"
        );

    }

    // Add Collaborator
    async addCollaborator(documentId, userId, role = "viewer") {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        const exists = document.collaborators.some(
            collaborator =>
                collaborator.user.toString() === userId.toString()
        );

        if (exists) {
            return document;
        }

        document.collaborators.push({
            user: userId,
            role
        });

        await document.save();

        return document;

    }

    // Remove Collaborator
    async removeCollaborator(documentId, userId) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        document.collaborators = document.collaborators.filter(
            collaborator =>
                collaborator.user.toString() !== userId.toString()
        );

        await document.save();

        return document;

    }

    // Change Collaborator Role
    async changeRole(documentId, userId, role) {

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        const collaborator = document.collaborators.find(
            collaborator =>
                collaborator.user.toString() === userId.toString()
        );

        if (!collaborator) {
            throw new Error("Collaborator not found.");
        }

        collaborator.role = role;

        await document.save();

        return document;

    }

}

module.exports = new PermissionService();