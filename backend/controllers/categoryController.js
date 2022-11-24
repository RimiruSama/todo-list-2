const Category = require('../models/categoryModal');

const getAllCategories = async (req, res) => {
    try {
        const listCate = await Category.find({}, {_id: 1, name: 1, status: 1});
        res.status(200).json(listCate);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const addCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const category = await new Category({name}).save();
        return res.json({category});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const editCategory = async (req, res) => {
    try {
        const {name} = req.body;
        const cate = await Category.findById(req.params.id);
        if (!cate) {
            return res.status(401).json({message: 'Khong tim thay danh muc!'});
        }

        cate.name = name;
        await cate.save();
        return res.status(200).json({cate});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndRemove(req.params.id);
        return res.status(200).json({status: 'success'})
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports = {
    getAllCategories,
    addCategory,
    editCategory,
    deleteCategory
}