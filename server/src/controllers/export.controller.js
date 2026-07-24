const exportService = require("../services/export.service");

class ExportController {

    // Export PDF
    async exportPDF(req, res) {

        try {

            const pdf = await exportService.exportPDF(
                req.params.documentId,
                req.user.id
            );

            res.setHeader("Content-Type", "application/pdf");

            res.send(pdf);

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message
            });

        }

    }

    // Export HTML
    async exportHTML(req, res) {

        try {

            const html = await exportService.exportHTML(
                req.params.documentId,
                req.user.id
            );

            res.setHeader("Content-Type", "text/html");

            res.send(html);

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message
            });

        }

    }

    // Export Markdown
    async exportMarkdown(req, res) {

        try {

            const markdown = await exportService.exportMarkdown(
                req.params.documentId,
                req.user.id
            );

            res.setHeader("Content-Type", "text/markdown");

            res.send(markdown);

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = new ExportController();