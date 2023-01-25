const registerService = require('../services/registerService');

const registerController = {
  // Falta criar o usuário no banco de dados e criar situações de não sucesso
  register: async (req, res) => {
    const { name, email, password } = req.body;   
    const registerValidation = await registerService.validateRegister(name, email, password);
    return res.status(200).json({ registerValidation });
  },
};

module.exports = registerController;