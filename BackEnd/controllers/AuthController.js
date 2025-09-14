const authService = require('../services/AuthService');

async function register(req, res, next) {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function logout(req, res, next) {
  try {
    // For JWT, you may handle this on client side or blacklist tokens
    // we need to delete the token from the front end
    res.status(200).json({ message: 'Logged out' });
  } catch (error) {
    next(error);
  }
}

async function getCurrentUser(req, res, next) {
  try {
    const user = await authService.getUserProfile(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login, logout, getCurrentUser };
