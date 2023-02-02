const salesService = require('../services/salesService');

const salesController = {
  createSale: async (req, res) => {
    const sale = await salesService.createSale(req.body);
    return res.status(201).json(sale);
  },

  getSale: async (req, res) => {
    const sale = await salesService.getSale(req.params.id);
    return res.status(200).json(sale);
  },
  
  getUserSales: async (req, res) => {
    const userSales = await salesService.getUserSales(req.params.id);
    return res.status(200).json(userSales);
  },

  updateStatus: async (req, res) => {
    const updateStatus = await salesService.updateStatus(req.params.id, req.body);
    return res.status(200).json(updateStatus);
  },
};

module.exports = salesController;
