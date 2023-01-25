const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const validations = {
  validatePassword: (password) => {
    if (password.length < 6) {
      return {
        status: 400,
        message: '"password" length must be at least 6 characters long1',
      };
    }

    return {};
  },
  
  validateEmail: (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = emailRegex.test(email);

    if (!emailValidation) {
      return {
        status: 400,
        message: '"email" must be a valid email1',
      };
    }
    
    return {};
  },

  validateName: (name) => {    
    if (name.length < 12) {
      return {
        status: 400,
        message: '"name" length must be at least 12 characters long',
      };
    }
    return {};
  },

  checkPassword: (inputPassword, userPassword) => {
    const passwordHash = md5(inputPassword);

    if (userPassword !== passwordHash) {
      return {
        status: 401,
        message: 'Unauthorized',
      };
    }
    
    return {};
  },

  createToken: async (payload) => {
    try {
      const secret = await fs.readFile('../../../jwt.evaluation.key', 'utf-8');

      const token = jwt.sign(payload, secret);
      
      return token;
    } catch (error) {
      console.error('Error reading jwt secret file.');
    }
  },
};

module.exports = validations;
