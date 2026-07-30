const jwt = require("jsonwebtoken");

<<<<<<< HEAD
function generateToken(id) {
  return jwt.sign({ id }, "mysecretkey");
}

module.exports = generateToken;
=======
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        }
    );
};

module.exports = generateToken;
>>>>>>> a3f6a982307797257c7d666503f42bdc941950d5
