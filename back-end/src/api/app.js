const express = require('express');
const { showAll } = require('../controllers/productController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.route('/products').get(showAll);

module.exports = app;
