const Budget = require('../models/Budget');
const Transaction = require('../models/Transaction');

async function getAllBudgets(userId) {
  return Budget.find({ user: userId });     // no wait her because we don't need to check or process for the results within the function. So, it directly be a promise returned.
};                                          // Omit await if you just want to return the Promise for the caller.

async function createBudget(userId, data) {
  return Budget.create({ ...data, user: userId });
};

async function updateBudget(id, data) {
  const budget = await Budget.findByIdAndUpdate(id, data, { new: true });     // Use await inside when you need the result for logic in the function.
  if (!budget){
    throw new Error('Budget not found');
  }
  return budget;
};

async function deleteBudget(id) {
  const deleted = await Budget.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error('Budget not found');
  }
};


// give a summary of budgeted amount, spent amount, and remaining amount per category for the current month
async function getMonthlySummary(userId) {

  const transactions = await Transaction.find({ user: userId });
  const budgets = await Budget.find({ user: userId });

  return budgets.map(({ category, amount }) => {      // looping through each budget
    const spent = transactions
      .filter(txn => txn.category === category)   // txn keeps only matching transactions.
      .reduce((total, txn) => total + txn.amount, 0);   // zero is the initial value of total

    return {
      category,
      budget: amount,
      spent,
      remaining: amount - spent,
    };
  });
}

module.exports = { getAllBudgets, createBudget, updateBudget, deleteBudget, getMonthlySummary };