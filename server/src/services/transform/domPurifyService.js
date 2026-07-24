const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

class DOMPurifyService {

    sanitize(html) {

        return DOMPurify.sanitize(html);

    }

}

module.exports = new DOMPurifyService();