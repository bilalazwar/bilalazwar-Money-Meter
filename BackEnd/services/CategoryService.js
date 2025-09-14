const Category = require('../models/Category');

async function getAllCategories(userId) {
  return Category.find({ user: userId });
};

async function createCategory(userId, data) {
  return Category.create({ ...data, user: userId });
};

async function updateCategory(id, data) {
  const category = await Category.findByIdAndUpdate(id, data, { new: true });
  if (!category){
    throw new Error('Category not found');
  }
  return category;
};

async function deleteCategory(id) {
  const result = await Category.findByIdAndDelete(id);
  if (!result){
    throw new Error('Category not found');
  }
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };