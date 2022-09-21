const jwt = require('../helpers/jwtGenerator');
const LoginService = require('../services/login');

module.exports = {
  async login(req, res) {
    const UserData = await LoginService.login(req.body);
    if (UserData.status) return res.status(UserData.status).json({ error: UserData.message });
    const generatedToken = jwt.generate(UserData.email, UserData.role);
    return res.status(200).json({ ...UserData, token: generatedToken });
  },
};