const validations = {
  validatePassword: (password) => {
    if (password.length < 6) {
      return {
        status: 400,
        message: '"password" length must be at least 6 characters long',
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
        message: '"email" must be a valid email',
      };
    }
    
    return {};
  },
};

module.exports = validations;
