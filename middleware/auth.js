const jwt = require("jsonwebtoken");
const config = require("config");

//Check for jwt auth header
module.exports = function jwtAuth(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Missing authorization header " });
  }
  try {
    const payload = jwt.verify(token, config.get("jwtSecret"));
    req.user = payload.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
