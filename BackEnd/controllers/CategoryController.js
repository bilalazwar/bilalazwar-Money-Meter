const categoryService = require('../services/CategoryService');

async function getAllCategories(req, res, next) {
  try {
    const categories = await categoryService.getAllCategories(req.user.id);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
  try {
    const category = await categoryService.createCategory(req.user.id, req.body);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const updated = await categoryService.updateCategory(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };
