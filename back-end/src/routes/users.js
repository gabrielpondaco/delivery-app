const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/sellers', controller.showAllSellers);

router.post('/userId', controller.getUserId);

module.exports = router;