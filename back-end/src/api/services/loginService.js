const UserModel = require('../../database/models/user.model');

const loginService = {
  validateLogin: (email, password) => {
    if (!email || !password) return { message: 'Some required fields are missing' };
    return {};
  },
  login: async (email, password) => {
    const user = await UserModel.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return { message: 'Invalid fields' };
    }
    return user;
  },
};

module.exports = loginService;
