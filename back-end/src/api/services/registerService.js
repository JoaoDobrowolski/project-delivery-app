const validations = require('../validations/validations');
const db = require('../../database/models');

const registerService = {
  emailAvailability: async (email) => {
    const user = await db.User.findOne({ where: { email } });
    if (user !== null) {
     return { message: 'This email is not available' }; 
    }
    return true;
  },

  nameAvailability: async (name) => {
    const user = await db.User.findOne({ where: { name } });
    if (user !== null) {
     return { message: 'This name is not available' }; 
    }
    return true;
  },
  
  validateRegister: async (name, email, password) => {
    const nameValid = validations.validateName(name);
    const emailValid = validations.validateEmail(email);
    const passwordValid = validations.validatePassword(password);
    const emailAvailability = await registerService.emailAvailability(email);
    const nameAvailability = await registerService.nameAvailability(email);
    const role = 'customer';
    if (nameValid && emailValid && passwordValid && emailAvailability && nameAvailability) {
      const newUser = await db.User.create({ name, email, password, role})
      console.log('newUser --->', newUser);
      return newUser;
    }
    // const resp = { nameValid, emailValid, passwordValid, emailAvailability, nameAvailability };
    // return resp;
  },
};

module.exports = registerService;
