const Transaction = require('../models/Transaction');

async function getAll(userId) {
  return Transaction.find({ user: userId });
};

async function create(userId, data) {
  return Transaction.create({ ...data, user: userId });
};

async function getById(id) {
  const tx = await Transaction.findById(id);
  if (!tx) throw new Error('Transaction not found');
  return tx;
};

async function update(id, data) {
  const updated = await Transaction.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error('Transaction not found');
  return updated;
};

async function update(id) {
  const deleted = await Transaction.findByIdAndDelete(id);
  if (!deleted) throw new Error('Transaction not found');
};

async function filter(userId, query) {
  const { category, month, year } = query;
  const filter = { user: userId };

  if (category) filter.category = category;
  if (month && year) {
    const start = new Date(`${year}-${month}-01`);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    filter.date = { $gte: start, $lt: end };
  }

  return Transaction.find(filter);
};


module.exports = { getAll, create, getById, update, delete: update, filter };