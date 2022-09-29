const service = require('../services/users');

module.exports = {
  async showAllSellers(_req, res) {
    const result = await service.showAllSellers();
    return res.status(200).json(result);
  },
  async getUserId(req, res) {
    const { email } = req.body;
    const result = await service.getUserId(email);
    return res.status(201).json(result);
  },
  async getAll(_req, res) {
    const result = await service.getAll();
    return res.status(200).json(result);
  },
};