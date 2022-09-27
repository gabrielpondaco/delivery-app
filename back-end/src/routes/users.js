const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/sellers', controller.showAllSellers);

module.exports = router;