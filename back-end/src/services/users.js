const models = require('../database/models');

module.exports = {
  async showAllSellers() {
    const sellers = await models.User.findAll({
      where: { role: 'seller' },
      raw: true,
    });
    return sellers;
  },
};