const Version = require("../models/Version");
const Document = require("../models/Document");
const permissionService = require("./permission.service");

class VersionService {

    // Create New Version
    async createVersion(documentId, userId) {

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

        const latest = await Version.findOne({
            document: documentId
        }).sort({ versionNumber: -1 });

        const version = await Version.create({
            document: documentId,

            versionNumber: latest
                ? latest.versionNumber + 1
                : 1,

            content: document.content,

            createdBy: userId
        });

        return version;
    }

    // Get All Versions
    async getVersions(documentId, userId) {

        const canRead = await permissionService.canRead(
            documentId,
            userId
        );

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        return await Version.find({
            document: documentId
        })
        .populate("createdBy", "username email")
        .sort({ versionNumber: -1 });
    }

    // Get Single Version
    async getVersion(versionId) {

        const version = await Version.findById(versionId);

        if (!version) {
            throw new Error("Version not found.");
        }

        return version;
    }
}

module.exports = new VersionService();