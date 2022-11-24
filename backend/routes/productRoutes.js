const express = require('express');
const router = express.Router();

const {getAllProducts, addProduct, editProduct, deleteProduct} = require('../controllers/productController');

router.get('/getAll', getAllProducts);

router.get('/create', addProduct);

router.get('/edit/:id', editProduct);

router.get('/delete/:id', deleteProduct);

module.exports = router;