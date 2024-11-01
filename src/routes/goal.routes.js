const express = require("express");
const {
  getGoal,
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal.controllers.js");
const protect = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/", protect, getGoals);
router.get("/:id", protect, getGoal);
router.post("/", protect, createGoal);
router.put("/:id", protect, updateGoal);
router.patch("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

module.exports = router;
