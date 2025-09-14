const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/CategoryController');
const auth = require('../middleware/auth');

router.use(auth); // All category routes require auth

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
