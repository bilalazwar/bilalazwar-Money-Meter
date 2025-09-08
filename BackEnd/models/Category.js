const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Category must belong to a user']
  },
  name: {
    type: String,
    required: [true, 'Please provide category name'],
    trim: true,
    maxlength: [50, 'Category name cannot exceed 50 characters']
  },
  type: {
    type: String,
    enum: ['income', 'expense'], // categories can be income or expense
    required: [true, 'Category type is required']
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
