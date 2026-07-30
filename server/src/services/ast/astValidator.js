class ASTValidator {

    constructor() {

        this.validTypes = [
            "document",
            "heading",
            "paragraph",
            "list",
            "listItem",
            "codeBlock",
            "image"
        ];

    }

    validate(ast) {

        if (!ast) {
            throw new Error("AST is required.");
        }

        this.validateNode(ast);

        return true;
    }

    validateNode(node) {

        if (!node.id) {
            throw new Error("Node ID is missing.");
        }

        if (!node.type) {
            throw new Error("Node type is missing.");
        }

        if (!this.validTypes.includes(node.type)) {
            throw new Error(`Invalid node type: ${node.type}`);
        }

        if (node.children && !Array.isArray(node.children)) {
            throw new Error("Children must be an array.");
        }

        switch (node.type) {

            case "heading":

                if (
                    node.level < 1 ||
                    node.level > 6
                ) {

                    throw new Error(
                        "Heading level must be between 1 and 6."
                    );

                }

                break;

            case "image":

                if (!node.url) {

                    throw new Error(
                        "Image URL is required."
                    );

                }

                break;

            case "codeBlock":

                if (!node.language) {

                    throw new Error(
                        "Programming language is required."
                    );

                }

                break;

        }

        if (node.children) {

            node.children.forEach(child => {

                this.validateNode(child);

            });

        }

    }

}

module.exports = new ASTValidator();