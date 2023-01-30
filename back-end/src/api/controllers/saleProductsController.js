const saleProductsService = require('../services/saleProductsService');

const saleProductsController = {  
  getSaleProducts: async (req, res) => {
    const saleProducts = await saleProductsService.getSaleProducts(req.params.id);
    return res.status(200).json(saleProducts);
  },
};

module.exports = saleProductsController;
