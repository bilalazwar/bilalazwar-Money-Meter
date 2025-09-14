const express = require('express');
const router = express.Router();

// Importing route modules
router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/categories', require('./categoryRoutes'));
router.use('/transactions', require('./transactionRoutes'));
router.use('/budgets', require('./budgetRoutes'));

module.exports = router;
