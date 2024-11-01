const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/user.controllers.js");
const protect = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/me", protect, getMe);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
