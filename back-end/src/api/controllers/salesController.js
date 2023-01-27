const salesService = require('../services/salesService');

const salesController = {
  createSale: async (req, res) => {
    const sale = await salesService.createSale(req.body);
    return res.status(201).json(sale);
  },
};

module.exports = salesController;
