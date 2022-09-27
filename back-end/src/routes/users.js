const express = require('express');
const controller = require('../controllers/users');
const tokenId = require('../middlewares/tokenId')

const router = express.Router();

router.get('/sellers', controller.showAllSellers);

router.get('/token', tokenId);

module.exports = router;