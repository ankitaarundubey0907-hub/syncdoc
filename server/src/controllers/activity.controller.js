const activityService = require("../services/activity.service");

class ActivityController {

    async getDocumentActivity(req, res) {
        try {
            const activities = await activityService.getDocumentActivity(
                req.params.documentId
            );

            res.status(200).json({
                success: true,
                data: activities
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getUserActivity(req, res) {
        try {
            const activities = await activityService.getUserActivity(
                req.user.id
            );

            res.status(200).json({
                success: true,
                data: activities
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = new ActivityController();