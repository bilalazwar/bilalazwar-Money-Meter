// validators/userValidators.js
const { body } = require('express-validator');

exports.registerUserValidator = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('name').notEmpty().withMessage('Name is required'),
];
