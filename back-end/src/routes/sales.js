const express = require('express');
const controller = require('../controllers/sales');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/seller/orders', controller.getAllBySellerOrder);

// router.get('/customer/orders', controller.getByClientOrder);

router.get('/orders/:id', controller.getByClientOrder);

router.post('/order', controller.createOrder);

router.put('/', auth, controller.updateOrderStatus);

module.exports = router;