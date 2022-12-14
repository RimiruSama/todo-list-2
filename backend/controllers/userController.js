const asyncHandler = require('express-async-handler');

// @desc Register a new user
// @route /api/users
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    // validation
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all fields required');
    }

    res.send("Register Route");
});

// @desc Login a user
// @route /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Route');
});

module.exports = {
    registerUser,
    loginUser
}