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
    helpers.checkPassword(password, user.password);

    const response = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return response;
  },
};

module.exports = loginService;
