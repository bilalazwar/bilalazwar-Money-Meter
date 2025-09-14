const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.use(auth); // All routes below require authentication

router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;