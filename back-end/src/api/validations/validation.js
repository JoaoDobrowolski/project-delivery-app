// const db = require('../database/models');
// const jwtService = require('./jwtService');

const userService = {
  validatePassword: (password) => {
    if (password.length < 6) {
      return { message: '"password" length must be at least 6 characters long' };
    }
    return {};
  },
  validateEmail: (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = emailRegex.test(email);
    if (!emailValidation) {
      return { message: '"email" must be a valid email' };
    }
    return {};
  },
};

module.exports = userService;
