const jwt = require("jsonwebtoken");

function generateToken(id) {
  return jwt.sign({ id }, "mysecretkey");
}

module.exports = generateToken;
