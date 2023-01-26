const productsService = require('../services/productsService');

const productsController = {
  getAll: async (_req, res) => {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  },
};

module.exports = productsController;
