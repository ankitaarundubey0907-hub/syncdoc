const Document = require("../models/Document");
const permissionService = require("./permission.service");


const pdfGenerator = require("./transform/pdfGenerator");
const markdownParser = require("./transform/markdownParser");
const pdfGenerator = require("../utils/pdfGenerator");
const htmlGenerator = require("../utils/htmlGenerator");
const markdownParser = require("../utils/markdownParser");


class ExportService {

    // Export PDF
    async exportPDF(documentId, userId) {

        const canRead = await permissionService.canRead(documentId, userId);

        const canRead = await permissionService.canRead(
            documentId,
            userId
        );


        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }


        const html = markdownParser.parse(document.content);

        return await pdfGenerator.generate(html);
        return await pdfGenerator.generate(document);


    }

    // Export HTML
    async exportHTML(documentId, userId) {


        const canRead = await permissionService.canRead(documentId, userId);

        const canRead = await permissionService.canRead(
            documentId,
            userId
        );

        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }


        return markdownParser.parse(document.content);

        return htmlGenerator.generate(document);

 
    }

    // Export Markdown
    async exportMarkdown(documentId, userId) {


        const canRead = await permissionService.canRead(documentId, userId);

        const canRead = await permissionService.canRead(
            documentId,
            userId
        );


        if (!canRead) {
            throw new Error("Permission denied.");
        }

        const document = await Document.findById(documentId);

        if (!document) {
            throw new Error("Document not found.");
        }

        return document.content;

        return markdownParser.generate(document);


    }

}

module.exports = new ExportService();