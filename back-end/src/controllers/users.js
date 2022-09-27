const service = require('../services/users');

module.exports = {
  async showAllSellers(_req, res) {
    const result = await service.showAllSellers();
    return res.status(200).json(result);
  },
};