const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    const loginValidation = await loginService.validateLogin(email, password);

    if (loginValidation.message) {
      const { status, message } = loginValidation;

      return res.status(status).json(message);
    }
    
    return res.status(200).json(loginValidation);
  },
};

module.exports = loginController;
