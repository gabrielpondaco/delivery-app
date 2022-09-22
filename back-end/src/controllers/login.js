const jwt = require('../helpers/jwtGenerator');
const LoginService = require('../services/login');

module.exports = {
  async login(req, res) {
    const data = req.body;
    const user = await LoginService.login(data);
    if (user.status) return res.status(user.status).json({ error: user.message });
    const tokenGenerated = jwt.generate(user.email, user.role);
    return res.status(200).json({ ...user, token: tokenGenerated });
  },

  async register(req, res) {
    const data = req.body;
    const user = await LoginService.register(data);
    if (user.status) return res.status(user.status).json({ error: user.message });
    const tokenGenerated = jwt.generate(user.email, user.role);
    return res.status(200).json({ ...user, token: tokenGenerated });
  },
};