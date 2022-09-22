const schema = require('../schemas/register');

module.exports = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};