/**
 * Tree Builder
 * Creates AST nodes and document structure
 */

class TreeBuilder {

    constructor() {
        this.nodeId = 1;
    }

    generateId() {
        return `node_${this.nodeId++}`;
    }

    createDocument(title = "Untitled Document") {
        return {
            id: this.generateId(),
            type: "document",
            title,
            children: [],
            createdAt: new Date(),
            updatedAt: new Date()
        };
    }

    createParagraph(text = "") {
        return {
            id: this.generateId(),
            type: "paragraph",
            text,
            children: []
        };
    }

    createHeading(level = 1, text = "") {
        return {
            id: this.generateId(),
            type: "heading",
            level,
            text,
            children: []
        };
    }

    createList(ordered = false) {
        return {
            id: this.generateId(),
            type: "list",
            ordered,
            children: []
        };
    }

    createListItem(text = "") {
        return {
            id: this.generateId(),
            type: "listItem",
            text,
            children: []
        };
    }

    createCodeBlock(language = "javascript", code = "") {
        return {
            id: this.generateId(),
            type: "codeBlock",
            language,
            code,
            children: []
        };
    }

    createImage(url, alt = "") {
        return {
            id: this.generateId(),
            type: "image",
            url,
            alt,
            children: []
        };
    }

    addChild(parent, child) {
        parent.children.push(child);
        parent.updatedAt = new Date();
    }

    removeChild(parent, childId) {
        parent.children = parent.children.filter(
            child => child.id !== childId
        );

        parent.updatedAt = new Date();
    }

}

module.exports = new TreeBuilder();