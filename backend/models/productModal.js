const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema

const productModal = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name product']
    },
    category: {
        type: ObjectId,
        ref: "category",
        required: [true, 'Please add category']
    },
    image: {
        type: String,
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('product', productModal);