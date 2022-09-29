const models = require('../database/models');

module.exports = {
  async showAllSellers() {
    const sellers = await models.Users.findAll({
      where: { role: 'seller' },
      raw: true,
    });
    return sellers;
  },
  async getUserId(email) {
    const user = await models.Users.findOne({ where: { email }, raw: true });
    return user.id;
  },
  async getAll() {
    const users = await models.Users.findAll({ raw: true });
    return users;
  },
};
