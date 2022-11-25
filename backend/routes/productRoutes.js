const express = require('express');
const router = express.Router();

const {getAllProduct, addProduct, editProduct, deleteProduct} = require('../controllers/productController');

router.get('/getAll', getAllProduct);

router.post('/create', addProduct);

router.get('/edit/:id', editProduct);

router.get('/delete/:id', deleteProduct);

module.exports = router;