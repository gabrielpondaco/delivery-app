const express = require('express');
const controller = require('../controllers/product');

const router = express.Router();

router.post('/products', controller.showAll);

module.exports = router;