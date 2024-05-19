const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};
const validateToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
const attachCookies = async(res, user) => {
  const token = createToken(user);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true
  });
};
module.exports = { createToken, validateToken, attachCookies };
