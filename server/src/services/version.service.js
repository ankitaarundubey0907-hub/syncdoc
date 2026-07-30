const Version = require("../models/version.model");
const Document = require("../models/document.model");
const permissionService = require("./permission.service");

class VersionService {

    async createVersion(documentId, userId) {

        const canWrite = await permissionService.canWrite(documentId, userId);

        if (!canWrite) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

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

    async getVersions(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        return await Version.find({
            document: documentId
        })
        .populate("createdBy", "username email")
        .sort({ versionNumber: -1 });

    }

    async getVersion(versionId) {

        return await Version.findById(versionId);

    }

}

module.exports = new VersionService();