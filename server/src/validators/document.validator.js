const { body } = require("express-validator");

const documentValidator = [
    body("title")
    .trim()
    .notEmpty()
    .withMessage("Document title is required"),
];

module.exports = documentValidator;