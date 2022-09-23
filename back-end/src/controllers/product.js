const { getAll } = require('../services/product');

const showAll = async (_req, res) => {
  const result = await getAll();
  return res.status(200).send(result);
};

module.exports = {
  showAll,
};