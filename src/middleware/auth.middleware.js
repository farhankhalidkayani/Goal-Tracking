const asyncHandler = require("express-async-handler");
const User = require("../models/user.models.js");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    }
  } catch (err) {
    res.status(401);
    throw new Error("Unauthorized");
  }
  if (!token) {
    res.status(401);
    throw new Error("Unauthorized, no token");
  }
});

module.exports = protect;
