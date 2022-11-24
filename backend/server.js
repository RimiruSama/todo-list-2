const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to database
connectDB();

const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(200).json({message: 'Api has running!'});
})

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/category', require('./routes/categoryRoutes'));

// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})