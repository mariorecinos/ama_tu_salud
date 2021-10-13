// Depenencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const methodOverride = require("method-override")
const indexController = require('./controllers/index.js')
const medController = require('./controllers/medication.js')
const sugrController = require('./controllers/bloodsugar.js')
require('dotenv').config();

// Database
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);
const db = mongoose.connection;

db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (error) => console.log('MongoDB Error ' + error.message));

// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

//Routes
app.use('/', indexController)
app.use('/medications', medController)
app.use('/bloodsugar', sugrController)
// Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Express is listening on port:${PORT}`);
});
