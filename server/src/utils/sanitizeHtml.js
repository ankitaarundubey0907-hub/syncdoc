const sanitizeHtml = (text = "") => {
    return text
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
};

module.exports = sanitizeHtml;