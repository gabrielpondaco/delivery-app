const express = require('express');
const controller = require('../controllers/product');

const router = express.Router();

router.get('/products', controller.showAll);

module.exports = router;