const Document = require("../models/document.model");
const permissionService = require("./permission.service");

const pdfGenerator = require("./transform/pdfGenerator");
const markdownParser = require("./transform/markdownParser");

class ExportService {

    // Export PDF
    async exportPDF(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        const html = markdownParser.parse(document.content);

        return await pdfGenerator.generate(html);
    }

    // Export HTML
    async exportHTML(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        return markdownParser.parse(document.content);
    }

    // Export Markdown
    async exportMarkdown(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        return document.content;
    }

}

module.exports = new ExportService();