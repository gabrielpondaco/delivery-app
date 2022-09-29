const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/sellers', controller.showAllSellers);

// thiago - endpoint to get all users
router.get('/users', controller.getAll);

router.post('/userId', controller.getUserId);


module.exports = router;