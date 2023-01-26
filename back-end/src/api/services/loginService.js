const helpers = require('../helpers/helpers');
const db = require('../../database/models');

const loginService = {
  validateUser: async (email) => {
    const user = await db.User.findOne({ where: { email } });

    if (user === null) {
      return { status: 404, message: 'User not found' };
    }

    return user;
  },
  
  validateLogin: async (email, password) => {
    const emailValidation = helpers.validateEmail(email);
    if (emailValidation.message) return emailValidation;

    const passwordValidation = helpers.validatePassword(password);
    if (passwordValidation.message) return passwordValidation;
    
    const user = await loginService.validateUser(email);
    if (user.message) return user;

    const checkPassword = helpers.checkPassword(password, user.password);
    if (checkPassword.message) return checkPassword;

    const token = helpers.createToken(
      { name: user.name, email: user.email, role: user.role },
    );

    const response = { name: user.name, email: user.email, role: user.role, token };

    return response;
  },
};

module.exports = loginService;
