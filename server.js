const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use('/api/product', productRoutes);

module.exports = app;
