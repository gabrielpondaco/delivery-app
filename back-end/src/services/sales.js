const model = require('../database/models');
const productService = require('./product');

const createOrder = async ({ orderInfo, products }) => {
  try {
    const { dataValues } = await model.Sales.create(orderInfo);
    const fixedProducts = products
      .map(({ id, qty }) => ({ saleId: dataValues.id, productId: id, quantity: qty }));
    await model.SalesProducts.bulkCreate(fixedProducts);
    return dataValues.id;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllBySellerOrder = async (id) => {
  const orders = await model.Sales.findAll({
    where: { sellerId: id },
    raw: true,
  });

  return orders;
};

const getByUserId = async (id) => {
  const order = await model.Sales.findAll({ where: { userId: id } });
  return order;
};

const getByClientOrder = async (id) => {
  const order = await model.SalesProducts.findAll({
    where: { saleId: id },
    attributes: ['productId', 'quantity'],
    raw: true,
  });

  const orderInfo = await model.Sales.findOne({
    where: { id },
    attributes: ['id', 'status', 'saleDate', 'sellerId'],
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
  getAllBySellerOrder,
  getByClientOrder,
  updateOrderStatus,
  getByUserId,
};
