// Handles registration, login, logout, token refresh.

const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');
const auth = require('../middleware/auth');

// Public
// http://localhost:5000/api/auth/register
router.post('/register', authController.register);
router.post('/login', authController.login);

// Protected
router.get('/me', auth, authController.getCurrentUser);
router.post('/logout', auth, authController.logout);

module.exports = router;

// const CustomError = require('../utils/CustomError');
// need to using CustomError for throwing errors with status codes