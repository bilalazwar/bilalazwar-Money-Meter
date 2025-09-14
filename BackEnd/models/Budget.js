const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Budget must belong to a user']
  },
  name: {
    type: String,
    required: [true, 'Please provide a budget name'],
    trim: true,
    maxlength: [50, 'Budget name cannot exceed 50 characters']
  },
  totalAmount: {
    type: Number,
    required: [true, 'Budget total amount is required'],
    min: [0, 'Budget amount cannot be negative']
  },
  spentAmount: {
    type: Number,
    default: 0,
    min: [0, 'Spent amount cannot be negative']git 
  },
  currency: {
    type: String,
    default: 'LKR'
  },
  periodStart: {
    type: Date,
    required: [true, 'Start date of budget is required']
  },
  periodEnd: {
    type: Date,
    required: [true, 'End date of budget is required']
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
