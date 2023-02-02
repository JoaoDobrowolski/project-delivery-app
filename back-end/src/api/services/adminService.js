const md5 = require('md5');
const helpers = require('../helpers/helpers');
const db = require('../../database/models');

const adminService = {
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
    const nameValid = await adminService.nameAvailability(name);
    if (nameValid.message) return { status: 409, message: nameValid.message };
    const emailValid = await adminService.emailAvailability(email);
    if (emailValid.message) return { status: 409, message: emailValid.message };
    return false; 
  },
  
  validateRegister: async (name, email, password, role) => {
    const nameValid = helpers.validateName(name);
    if (nameValid.message) return nameValid;

    const emailValid = helpers.validateEmail(email);
    if (emailValid.message) return emailValid;

    const passwordValid = helpers.validatePassword(password);
    if (passwordValid.message) return passwordValid;         
    
    const availabilityTest = await adminService.availability(name, email);
    if (availabilityTest.message) return availabilityTest;
    
    const passwordEncripted = md5(password);       
    
    const newUser = await db.User.create({ name, email, password: passwordEncripted, role });
    
    return newUser;    
  },
};

module.exports = adminService;
