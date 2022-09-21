const { Products } = require('../database/models');

const getAll = async () => {
  const products = await Products.findAll({ raw: true });
  return products;
};

module.exports = {
  getAll,
};