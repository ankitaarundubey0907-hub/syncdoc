const { body } = require("express-validator");

const commentValidator = [
    body("content")
    .trim()
    .notEmpty()
    .withMessage("Comment content is required"),
];

module.exports = commentValidator;