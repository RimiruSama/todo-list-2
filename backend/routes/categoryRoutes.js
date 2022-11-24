const express = require('express');
const router = express.Router();

const {getAllCategories, addCategory, editCategory, deleteCategory} = require('../controllers/categoryController');

router.get('/getAll', getAllCategories);

router.post('/create', addCategory);

router.put('/edit/:id', editCategory);

router.delete('/delete/:id', deleteCategory);

module.exports = router;