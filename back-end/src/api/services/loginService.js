const validations = require('../validations/validations');
const db = require('../../database/models');

const loginService = {
  validateUser: async (email) => {
    const user = await db.User.findOne({ where: { email } });

    if (user === null) {
      return {
        status: 404,
        message: 'User not found',
      };
    }

    const response = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return response;
  },
  
  validateLogin: async (email, password) => {
    const emailValidation = validations.validateEmail(email);
    const passwordValidation = validations.validatePassword(password);
    const userValidation = await loginService.validateUser(email);

    const resp = { emailValidation, passwordValidation, userValidation };

    return resp;
  },
};

module.exports = loginService;
