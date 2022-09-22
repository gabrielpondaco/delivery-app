const express = require('express');
const { loginRouter } = require('../routes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
