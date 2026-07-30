const versionService = require("../services/version.service");

class VersionController {

    // Create New Version
    async createVersion(req, res) {

        try {

            const version = await versionService.createVersion(
                req.params.documentId,
                req.user.id
            );

            res.status(201).json({
                success: true,
                message: "Version created successfully.",
                data: version,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Get All Versions
    async getVersions(req, res) {

        try {

            const versions = await versionService.getVersions(
                req.params.documentId,
                req.user.id
            );

            res.status(200).json({
                success: true,
                data: versions,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Get Single Version
    async getVersion(req, res) {

        try {

            const version = await versionService.getVersion(
                req.params.versionId
            );

            res.status(200).json({
                success: true,
                data: version,
            });

        } catch (error) {

            res.status(404).json({
                success: false,
                message: error.message,
            });

        }

    }

}

module.exports = new VersionController();