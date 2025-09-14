const transactionService = require('../services/transactionService');

async function getAllTransactions(req, res, next) {
  try {
    const transactions = await transactionService.getAll(req.user.id);
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
}

async function createTransaction(req, res, next) {
  try {
    const transaction = await transactionService.create(req.user.id, req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
}

async function getTransactionById(req, res, next) {
  try {
    const transaction = await transactionService.getById(req.params.id);
    res.status(200).json(transaction);
  } catch (error) {
    next(error);
  }
}

async function updateTransaction(req, res, next) {
  try {
    const updated = await transactionService.update(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteTransaction(req, res, next) {
  try {
    await transactionService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

async function filterTransactions(req, res, next) {
  try {
    const filtered = await transactionService.filter(req.user.id, req.query);
    res.status(200).json(filtered);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllTransactions, createTransaction, getTransactionById, updateTransaction, deleteTransaction, filterTransactions };
