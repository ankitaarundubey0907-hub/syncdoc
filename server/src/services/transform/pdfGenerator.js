const puppeteer = require("puppeteer");

class PDFGenerator {

    /**
     * Generate PDF from HTML
     */
    async generate(html) {

        const browser = await puppeteer.launch({
            headless: true
        });

        try {

            const page = await browser.newPage();

            await page.setContent(html, {
                waitUntil: "networkidle0"
            });

            const pdf = await page.pdf({
                format: "A4",
                printBackground: true,
                margin: {
                    top: "20px",
                    right: "20px",
                    bottom: "20px",
                    left: "20px"
                }
            });

            return pdf;

        } finally {

            await browser.close();

        }

    }

    /**
     * Save PDF to a file
     */
    async save(html, filePath) {

        const browser = await puppeteer.launch({
            headless: true
        });

        try {

            const page = await browser.newPage();

            await page.setContent(html, {
                waitUntil: "networkidle0"
            });

            await page.pdf({
                path: filePath,
                format: "A4",
                printBackground: true
            });

            return filePath;

        } finally {

            await browser.close();

        }

    }

}

module.exports = new PDFGenerator();