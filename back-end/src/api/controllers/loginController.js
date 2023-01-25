const loginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const loginValidation = await loginService.validateLogin(email, password);

    if (loginValidation.emailValidation.status === 400) {
      const { status } = loginValidation.emailValidation;
      const { message } = loginValidation.emailValidation;
      return res.status(status).json(message);
    }

    if (loginValidation.passwordValidation.status === 400) {
      const { status } = loginValidation.passwordValidation;
      const { message } = loginValidation.passwordValidation;
      return res.status(status).json(message);
    }

    if (loginValidation.userValidation.status === 404) {
      const { status } = loginValidation.userValidation;
      const { message } = loginValidation.userValidation;
      return res.status(status).json(message);
    }

    return res.status(200).json(loginValidation.userValidation);
  },
};

module.exports = loginController;
