const validations = require('../validations/validations');
const db = require('../../database/models');

const loginService = {
  validateUser: async (email, password) => {
    const user = await db.User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return { message: 'Invalid fields' };
    }
    return user;
  },
  
  validateLogin: (email, password) => {
    const emailValidation = validations.validateEmail(email);
    const passwordValidation = validations.validatePassword(password);
    const userValidation = this.validateUser(email, password);
    if (
      !emailValidation
      || !passwordValidation
      || !userValidation
    ) return { message: 'Some required fields are invalid' };
    return { emailValidation, passwordValidation };
  },
};

module.exports = loginService;
