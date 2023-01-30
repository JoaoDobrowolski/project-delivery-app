const salesService = require('../services/salesService');

const salesController = {
  createSale: async (req, res) => {
    const sale = await salesService.createSale(req.body);
    return res.status(201).json(sale);
  },
  
  getUserSales: async (req, res) => {
    const userSales = await salesService.getUserSales(req.body);
    return res.status(200).json(userSales);
  },
};

module.exports = salesController;
