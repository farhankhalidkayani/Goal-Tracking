const Goal = require("../models/goals.models.js");
const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  try {
    const goals = await Goal.find({ user: req.user.id });
    if (!goals) {
      return res.status(404).json({ message: "No Goals found" });
    }
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getGoal = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const goal = await Goal.findById(id);
    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized no user" });
    }
    if (goal.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized user doesnot match" });
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const createGoal = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const { title, description, status } = req.body;
    const goal = await Goal.create({
      title,
      description,
      status,
      user: req.user.id,
    });
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
const updateGoal = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let goal = await Goal.findById(id);
    if (goal.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });

    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    let goal = await Goal.findById(id);
    if (goal.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    goal = await Goal.findByIdAndDelete(id);

    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { getGoal, getGoals, createGoal, updateGoal, deleteGoal };
