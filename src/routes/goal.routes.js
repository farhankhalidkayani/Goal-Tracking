const express = require("express");
const {
  getGoal,
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goal.controllers.js");

const router = express.Router();

router.get("/", getGoals);
router.get("/:id", getGoal);
router.post("/", createGoal);
router.put("/:id", updateGoal);
router.patch("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
