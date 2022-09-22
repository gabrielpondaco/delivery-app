const express = require('express');
const { loginRouter, productRouter } = require('../routes');

const app = express();

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', loginRouter);

app.use('/', productRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
