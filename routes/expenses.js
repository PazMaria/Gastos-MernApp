const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Expense = require("../models/Expense");

// Get all expenses
//route = GET /api/expenses

router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    return res.json({
      success: true,
      data: expenses,
    });
  } catch (err) {
    return res.json({
      success: false,
      error: "Server Error",
    });
  }
});

// Add an expense
//route = POST /api/expenses

router.post(
  "/",
  [
    auth,
    [
      check("created", "Please enter the date of the expense").not().isEmpty(),
      check("expense", "Please enter a name for the expense").not().isEmpty(),
      check("amount", "Please enter amount").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const { created, expense, amount } = req.body;
    try {
      const newExpense = new Expense({
        created: req.body.created,
        expense: req.body.expense,
        amount: Number(req.body.amount),
        user: req.user.id,
      });

      const expense = await newExpense.save();
      return res.json({
        success: true,
        data: expense,
      });
    } catch (error) {
      console.error(error.message);
      return res.json({
        success: false,
        error: "Server Error",
      });
    }
  }
);
// Update an expense
//route = POST /api/expenses:id

router.put("/:id", auth, async (req, res) => {
  const { created, expense, amount } = req.body;

  const expenseFields = {};
  if (created) expenseFields.created = created;
  if (expense) expenseFields.expense = expense;
  if (amount) expenseFields.amount = amount;

  try {
    let expense = await Expense.findById(req.params.is);
    if (!expense) return res.status(404).json({ msg: "Expense not found" });
    if (expense.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: expenseFields },
      { new: true }
    );
    res.json(expense);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Delete expenses
// route = DELETE /api/expenses:id
router.delete("/:id", auth, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ msg: "Expense not found" });
    if (expense.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await expense.remove();
    return res.json({
      success: true,
      message: "Expense deleted",
    });
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      error: "Server Error",
    });
  }
});

module.exports = router;
