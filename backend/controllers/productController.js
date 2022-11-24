const Product = require('../models/productModal');

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.status(200).json({product});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const editProduct = async (req, res) => {
    try {
        const {name, image, description} = req.body;
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(400).json({message: 'San pham khong ton tai'});
        }
        product.name = name;
        product.image = image
        product.description = description;
        await Product.save();
        return res.status(200).json('Chinh sua thong tin san pham thanh cong')
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id);
        return res.status(200).json({status: 'success'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllProduct,
    addProduct,
    editProduct,
    deleteProduct
}