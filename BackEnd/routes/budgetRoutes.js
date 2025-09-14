// GET    /api/budgets                 // Get all budgets
// POST   /api/budgets                 // Create new budget
// PUT    /api/budgets/:id             // Update budget
// DELETE /api/budgets/:id             // Delete budget

const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/BudgetController');
const auth = require('../middleware/auth');

router.use(auth); // All routes require login

router.get('/', budgetController.getAllBudgets);
router.post('/', budgetController.createBudget);
router.put('/:id', budgetController.updateBudget);
router.delete('/:id', budgetController.deleteBudget);
router.get('/summary/monthly', budgetController.getMonthlySummary);

module.exports = router;
