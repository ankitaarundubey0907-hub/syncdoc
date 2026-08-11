const ActivityLog = require("../models/ActivityLog");

class ActivityService {

    async log(documentId, userId, action, description = "") {

        return await ActivityLog.create({

            document: documentId,

            user: userId,

            action,

            description

        });

    }

    async getDocumentActivity(documentId) {

        return await ActivityLog.find({

            document: documentId

        })
        .populate("user", "username email")
        .sort({ createdAt: -1 });

    }

    async getUserActivity(userId) {

        return await ActivityLog.find({

            user: userId

        })
        .populate("document", "title")
        .sort({ createdAt: -1 });

    }

}

module.exports = new ActivityService();