const express = require('express');
const controller = require('../controllers/sales');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/seller/orders', controller.getAllClientsOrders);

router.get('/customer/orders', controller.getByClientOrder);

router.post('/order', controller.createOrder);

router.put('/', auth, controller.updateOrderStatus);

module.exports = router;