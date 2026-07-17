const validationMiddleware = (req, res, next) => {
    const errors = req.validationErrors;

    if (errors && errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors,
        });
    }

    next();
};

module.exports = validationMiddleware;