const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/TransactionController');
const auth = require('../middleware/auth');

router.use(auth); // Auth middleware for all routes

router.get('/', transactionController.getAllTransactions);
router.post('/', transactionController.createTransaction);
router.get('/filter', transactionController.filterTransactions);
router.get('/:id', transactionController.getTransactionById);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
