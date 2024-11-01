const Goal = require("../models/goals.models.js");

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    if (!goals) {
      return res.status(404).json({ message: "No Goals found" });
    }
    res.status(200).json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getGoal = async (req, res) => {
  try {
    const id = req.params.id;
    const goal = await Goal.findById(id);
    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateGoal = async (req, res) => {
  try {
    const id = req.params.id;

    const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const id = req.params.id;

    const goal = await Goal.findByIdAndDelete(id);
    if (!goal) {
      return res.status(404).json({ message: "No Goal found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getGoal, getGoals, createGoal, updateGoal, deleteGoal };
