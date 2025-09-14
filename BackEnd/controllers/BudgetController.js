const budgetService = require('../services/BudgetService'); // Assuming your functions are here

// GET /budgets
async function getAllBudgets(req, res, next) {
  try {
    const budgets = await budgetService.getAllBudgets(req.user.id);
    res.status(200).json(budgets);
  } catch (error) {
    next(error);
  }
}

// POST /budgets
async function createBudget(req, res, next) {
  try {
    const newBudget = await budgetService.createBudget(req.user.id, req.body);
    res.status(201).json(newBudget);
  } catch (error) {
    next(error);
  }
}

// PUT /budgets/:id
async function updateBudget(req, res, next) {
  try {
    const updatedBudget = await budgetService.updateBudget(req.params.id, dreq.bodyata);
    res.status(200).json(updatedBudget);
  } catch (error) {
    next(error);
  }
}

// DELETE /budgets/:id
async function deleteBudget(req, res, next) {
  try {
    const id = req.params.id;
    await budgetService.deleteBudget(id);
    res.status(204).send();  // No content is sent on successful delete
  } catch (error) {
    next(error);
  }
}

// GET /budgets/summary
async function getMonthlySummary(req, res, next) {
  try {
    const userId = req.user.id;
    const summary = await budgetService.getMonthlySummary(userId);
    res.status(200).json(summary);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllBudgets, createBudget, updateBudget, deleteBudget, getMonthlySummary };
