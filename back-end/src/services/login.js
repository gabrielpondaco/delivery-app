const md5 = require('md5');
const { Users } = require('../database/models');

module.exports = {
  async login(data) {
    const user = await Users.findOne({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return { status: 404, message: 'Not Found' };
    }
    const IsValidPassword = md5(data.password) === user.password;

    if (!IsValidPassword) {
      return { status: 401, message: 'Unauthorized - Invalid Password' };
    }
    const userInfos = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    return userInfos;
  },

  async register(data) {
    const user = await Users.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return { status: 409, message: 'Conflict' };
    }
    const userInfos = {
      name: data.name,
      email: data.email,
      role: data.role,
    };
    const userCreated = await Users.create({ ...userInfos, password: md5(data.password) });
    return userCreated;
  },
};