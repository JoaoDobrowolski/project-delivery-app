const LoginService = require('../services/loginService');

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const isValid = LoginService.validateLogin(email, password);
    if (isValid.message) return res.status(400).json({ message: isValid.message });
    const token = await LoginService.login(email, password);
    if (token.message) return res.status(400).json({ message: token.message });
      return res.status(200).json({ token });
    // return res.status(200).json('controller ok');
  },
};

module.exports = loginController;
