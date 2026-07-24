class HTMLGenerator {

    generate(ast) {

        if (!ast || !ast.children) {
            return "";
        }

        return ast.children.map(node => this.renderNode(node)).join("\n");

    }

    renderNode(node) {

        switch (node.type) {

            case "heading":
                return `<h${node.level}>${node.text}</h${node.level}>`;

            case "paragraph":
                return `<p>${node.text}</p>`;

            case "list":

                const tag = node.ordered ? "ol" : "ul";

                return `
<${tag}>
${node.children.map(item => `<li>${item.text}</li>`).join("")}
</${tag}>
`;

            case "codeBlock":

                return `
<pre>
<code class="${node.language}">
${node.code}
</code>
</pre>
`;

            case "image":

                return `<img src="${node.url}" alt="${node.alt}" />`;

            default:

                return "";

        }

    }

}

module.exports = new HTMLGenerator();