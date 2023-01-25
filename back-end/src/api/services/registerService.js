const validations = require('../validations/validations');
const db = require('../../database/models');

const registerService = {
  emailAvailability: async (email) => {
    const user = await db.User.findOne({ where: { email } });    
    if (user !== null) {
     return { message: 'This email is not available' }; 
    }
    return {};    
  },

  nameAvailability: async (name) => {
    const user = await db.User.findOne({ where: { name } });
    if (user !== null) {
     return { message: 'This name is not available' }; 
    }
    return {};
  },

  availability: async (name, email) => {
    const nameValid = await registerService.nameAvailability(name);
    if (nameValid.message) return { status: 409, message: nameValid.message };
    const emailValid = await registerService.emailAvailability(email);
    if (emailValid.message) return { status: 409, message: emailValid.message };
    return false; 
  },
  
  validateRegister: async (name, email, password) => {
    const nameValid = validations.validateName(name);
    if (nameValid.message) return { status: 409, message: nameValid.message };

    const emailValid = validations.validateEmail(email);
    if (emailValid.message) return { status: 409, message: emailValid.message };

    const passwordValid = validations.validatePassword(password);
    if (passwordValid.message) return { status: 409, message: passwordValid.message };         
    
    const availabilityTest = await registerService.availability(name, email);
    if (availabilityTest.message) {
      const { status, message } = availabilityTest;
      return { status, message };
    }

    const role = 'customer';    
    // Precisa encriptar a senha pra ir pro banco
    const newUser = await db.User.create({ name, email, password, role });
    
    return newUser;    
  },
};

module.exports = registerService;
