const JWT = require("jsonwebtoken");

const getJwtToken = (userId) => {
  return JWT.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: "1 day",
  });
};

module.exports = getJwtToken;
