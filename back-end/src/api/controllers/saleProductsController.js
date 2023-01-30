const saleProductsService = require('../services/saleProductsService');

const saleProductsController = {  
  getSaleProducts: async (req, res) => {
    const saleProducts = await saleProductsService.getSaleProducts(req.body);
    return res.status(200).json(saleProducts);
  },
};

module.exports = saleProductsController;
