const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

module.exports = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, SECRET);
    return res.status(200).json(decoded);
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}