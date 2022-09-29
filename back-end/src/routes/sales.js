const express = require('express');
const controller = require('../controllers/sales');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/seller/orders', controller.getAllBySellerOrder);

router.post('/customer/orders', controller.getAllByClientOrder);

router.get('/orders/:id', controller.getByClientOrder);

router.post('/order', controller.createOrder);

router.put('/status/:id', auth, controller.updateOrderStatus);

module.exports = router;