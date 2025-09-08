const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, 'Please tell us your name'],
    trim: true,  // removes whitespace from both ends of a string
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,  // converts the email to lower case before saving
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false  // by default do not return the password field in queries
  },
  currency: {
    type: String,
    default: 'LKR'
  },
  monthlyIncome: {
    type: Number,
    default: 0,
    min: [0, 'Monthly income cannot be negative']
  },
  isActive: {
    type: Boolean,
    default: true,
    select: false
  },
}, {
  timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;