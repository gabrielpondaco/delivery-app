const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/sellers', controller.showAllSellers);

router.get('/users', controller.getAll);

router.post('/userId', controller.getUserId);

// router.post('/createUser', controller.createUser);

module.exports = router;