const validations = require('../validations/validations');
const db = require('../../database/models');

const loginService = {
  validateUser: async (email) => {
    const user = await db.User.findOne({ where: { email } });
    if (user === null) {
     return { message: 'User not found' }; 
    }
    return {};
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
