const { body } = require("express-validator");

const nodeValidator = [
    body("type")
    .trim()
    .notEmpty()
    .withMessage("Node type is required"),

    body("content")
    .trim()
    .notEmpty()
    .withMessage("Node content is required"),
];

module.exports = nodeValidator;