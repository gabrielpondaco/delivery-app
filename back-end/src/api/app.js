const express = require('express');
const { loginRouter, productRouter, salesRouter } = require('../routes');

const app = express();

app.use(express.json());

app.use('/', loginRouter);

app.use('/', productRouter);

app.use('/', salesRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
