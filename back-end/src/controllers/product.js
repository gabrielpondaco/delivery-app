const { getAll } = require('../models/productsModel');

const showAll = async (_req, res) => {
  const result = await getAll();
  return res.status(200).send(result);
};

module.exports = {
  showAll,
};