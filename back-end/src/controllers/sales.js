const service = require('../services/sales');

const createOrder = async (req, res) => {
  const newOrder = req.body;

  await service.createOrder(newOrder);

  return res.status(200).end();
};

const getByUserId = async (req, res) => {
  const { id } = req.params;
  const orders = await service.getByUserId(id);
  return res.status(200).json(orders);
};

const getAllClientsOrders = async (_req, res) => {
  const orders = await service.getAllClientsOrders();

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
  getAllClientsOrders,
  getByClientOrder,
  updateOrderStatus,
  getByUserId,
};
