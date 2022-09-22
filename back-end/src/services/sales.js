const model = require('../database/models');
const productService = require('./product');

const createOrder = async ({ orderInfo, products }) => {
  try {
    await model.Sales.create(orderInfo);
    await model.SalesProduct.bulkCreate(products);
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAllClientsOrders = async () => {
  const orders = await model.Sales.findAll({
    raw: true,
  });

  return orders;
};

const getByUserId = async (id) => {
  const order = await model.Sales.findAll({ where: { userId: id } });
  return order;
};

const getByClientOrder = async (id) => {
  const order = await model.SalesProduct.findAll({
    where: { saleId: id },
    attributes: ['productId', 'quantity'],
    raw: true,
  });

  const orderInfo = await model.Sales.findOne({
    where: { saleId: id },
    attributes: ['id', 'status', 'saleDate'],
    raw: true,
  });

  // arr with info about each product
  const productsInfo = await Promise.all(order.map(async ({ productId, quantity }) => {
    const productInfo = await productService.getProductInfoById(productId);
    return { quantity, ...productInfo };
  }));

  return { ...orderInfo, productsInfo };
};

const updateOrderStatus = async (id, status) => {
  await model.Sales.update({ status }, {
    where: { saleId: id },
  });
};

module.exports = {
  createOrder,
  getAllClientsOrders,
  getByClientOrder,
  updateOrderStatus,
  getByUserId,
};
