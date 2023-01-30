const sellersService = require('../services/sellersService');

const sellersController = {
  getAll: async (_req, res) => {
    const sellers = await sellersService.getAll();
    return res.status(200).json(sellers);
  },
};

module.exports = sellersController;
