const service = require('../services/sales');

const createOrder = async (req, res) => {
  const newOrder = req.body;

  const saleId = await service.createOrder(newOrder);

  return res.status(201).json(saleId);
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const orders = await service.getByUserId(id);
  return res.status(200).json(orders);
};

const getAllBySellerOrder = async (req, res) => {
  const { id } = req.body;
  const orders = await service.getAllBySellerOrder(id);

  return res.status(200).json(orders);
};

const getAllByClientOrder = async (req, res) => {
  const { id } = req.body;
  const orders = await service.getAllByClientOrder(id);

  return res.status(200).json(orders);
};

const getByClientOrder = async (req, res) => {
  const { id } = req.params;

  const order = await service.getByClientOrder(id);

  return res.status(200).json(order);
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  await service.updateOrderStatus(id, status);

  return res.status(200).end();
};

module.exports = {
  createOrder,
  getAllBySellerOrder,
  getByClientOrder,
  updateOrderStatus,
  getByUserId,
  getAllByClientOrder,
};
