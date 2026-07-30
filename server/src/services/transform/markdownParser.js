const { marked } = require("marked");

class MarkdownParser {

    /**
     * Convert Markdown to HTML
     */
    parse(markdown = "") {
        return marked.parse(markdown);
    }

    /**
     * Check if markdown is empty
     */
    isEmpty(markdown) {
        return !markdown || markdown.trim().length === 0;
    }

}

module.exports = new MarkdownParser();