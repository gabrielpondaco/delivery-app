const express = require('express');
const loginValidate = require('../middlewares/login');
const controller = require('../controllers/login');

const router = express.Router();

router.post('/login', loginValidate, controller.login);

module.exports = router;