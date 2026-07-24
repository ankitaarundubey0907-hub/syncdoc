const treeBuilder = require("./treeBuilder");

class ASTBuilder {

    build(editorBlocks = []) {

        const document = treeBuilder.createDocument();

        for (const block of editorBlocks) {

            let node = null;

            switch (block.type) {

                case "heading":
                    node = treeBuilder.createHeading(
                        block.level || 1,
                        block.text || ""
                    );
                    break;

                case "paragraph":
                    node = treeBuilder.createParagraph(
                        block.text || ""
                    );
                    break;

                case "list":
                    node = treeBuilder.createList(
                        block.ordered || false
                    );

                    if (Array.isArray(block.items)) {

                        block.items.forEach(item => {

                            const listItem =
                                treeBuilder.createListItem(item);

                            treeBuilder.addChild(node, listItem);

                        });

                    }

                    break;

                case "code":
                    node = treeBuilder.createCodeBlock(
                        block.language || "javascript",
                        block.code || ""
                    );
                    break;

                case "image":
                    node = treeBuilder.createImage(
                        block.url,
                        block.alt || ""
                    );
                    break;

                default:
                    node = treeBuilder.createParagraph(
                        block.text || ""
                    );

            }

            treeBuilder.addChild(document, node);

        }

        return document;

    }

}

module.exports = new ASTBuilder();