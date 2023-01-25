const registerService = require('../services/registerService');

const registerController = {  
  register: async (req, res) => {
    const { name, email, password } = req.body;   
    const register = await registerService.validateRegister(name, email, password);    
    if (register.message) {
      const { status, message } = register;
      return res.status(status).json(message);
    }
    return res.status(201).json(register);
  },
};

module.exports = registerController;