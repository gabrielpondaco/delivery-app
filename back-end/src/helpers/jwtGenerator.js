const jwt = require('jsonwebtoken');
const fs = require('fs');

const jwtConfig = {
  expiresIn: '365d',
};

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

module.exports = {
  verify(token) {
      return jwt.verify(token, SECRET);
  },
  generate(email, role) {
      return jwt.sign({ email, role }, SECRET, jwtConfig);
  },
}; 