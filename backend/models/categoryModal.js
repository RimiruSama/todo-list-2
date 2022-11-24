const mongoose = require('mongoose');

const categoryModal = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name category'],
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Show', 'Hide'],
        default: 'Show'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('category', categoryModal);