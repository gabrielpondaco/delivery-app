const express = require('express');
const loginValidate = require('../middlewares/login');
const userSchemas = require('../schemas/login');
const controller = require('../controllers/login');

const router = express.Router();

router.post('/login', loginValidate(userSchemas), controller.login);

module.exports = router;