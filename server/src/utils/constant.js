const USER_ROLES = {
    ADMIN: "admin",
    EDITOR: "editor",
    VIEWER: "viewer",
};

const DOCUMENT_STATUS = {
    ACTIVE: "active",
    ARCHIVED: "archived",
    DELETED: "deleted",
};

const PERMISSIONS = {
    READ: "read",
    WRITE: "write",
    COMMENT: "comment",
    SHARE: "share",
    DELETE: "delete",
    EXPORT: "export",
};

const SOCKET_EVENTS = {
    JOIN_DOCUMENT: "join-document",
    LEAVE_DOCUMENT: "leave-document",
    DOCUMENT_UPDATE: "document-update",
    CURSOR_UPDATE: "cursor-update",
    USER_CONNECTED: "user-connected",
    USER_DISCONNECTED: "user-disconnected",
    SAVE_DOCUMENT: "save-document",
};

const BLOCK_TYPES = {
    DOCUMENT: "document",
    PARAGRAPH: "paragraph",
    HEADING: "heading",
    LIST: "list",
    LIST_ITEM: "listItem",
    CODE_BLOCK: "codeBlock",
    IMAGE: "image",
};

module.exports = {
    USER_ROLES,
    DOCUMENT_STATUS,
    PERMISSIONS,
    SOCKET_EVENTS,
    BLOCK_TYPES,
};