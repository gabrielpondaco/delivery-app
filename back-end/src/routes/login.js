const express = require('express');
const loginValidate = require('../middlewares/login');
const registerValidate = require('../middlewares/register');
const controller = require('../controllers/login');

const router = express.Router();

router.post('/login', loginValidate, controller.login);
router.post('/register', registerValidate, controller.register);

module.exports = router;