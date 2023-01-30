const sellersService = require('../services/sellersService');

const sellersController = {
  getAll: async (_req, res) => {
    const sellers = await sellersService.getAll();
    return res.status(200).json(sellers);
  },
  getById: async (req, res) => {
    const seller = await sellersService.getById(req.params.id);
    if (seller.message) {
      const { status, message } = seller;

      return res.status(status).json(message);
    }
    return res.status(200).json(seller);
  },
};

module.exports = sellersController;
