const permissionService = require("../services/permission.service");

class PermissionController {

    // Check Read Permission
    async canRead(req, res) {

        try {

            const result = await permissionService.canRead(
                req.params.documentId,
                req.user.id
            );

            res.status(200).json({
                success: true,
                canRead: result,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Check Write Permission
    async canWrite(req, res) {

        try {

            const result = await permissionService.canWrite(
                req.params.documentId,
                req.user.id
            );

            res.status(200).json({
                success: true,
                canWrite: result,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Add Collaborator
    async addCollaborator(req, res) {

        try {

            const document = await permissionService.addCollaborator(
                req.params.documentId,
                req.body.userId
            );

            res.status(200).json({
                success: true,
                message: "Collaborator added successfully.",
                data: document,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Remove Collaborator
    async removeCollaborator(req, res) {

        try {

            const document = await permissionService.removeCollaborator(
                req.params.documentId,
                req.body.userId
            );

            res.status(200).json({
                success: true,
                message: "Collaborator removed successfully.",
                data: document,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

}

module.exports = new PermissionController();