const { Products } = require('../database/models');

module.exports = {
  async getAll() {
    const products = await Products.findAll({ raw: true });
    return products;
  },

  async getProductInfoById(id) {
    const product = await Products.findOne({
      where: { id },
      attributes: { exclude: ['id'] },
      raw: true,
    });
    return product;
  },
};
