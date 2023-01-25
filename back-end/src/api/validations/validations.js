const validations = {
  validatePassword: (password) => {
    if (password.length < 6) {
      return { message: '"password" length must be at least 6 characters long' };
    }
    return true;
  },
  
  validateEmail: (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = emailRegex.test(email);
    if (!emailValidation) {
      return { message: '"email" must be a valid email' };
    }
    return true;
  },

  validateName: (name) => {    
    if (name.length < 12) {
     return { message: '"name" length must be at least 12 characters long' }; 
    }
    return true;
  },
};

module.exports = validations;
