const db = require('../../database/models');

const saleProductsService = {

  getSaleProducts: async (saleId) => {
    const saleProducts = await db.SaleProduct.findAll({ where: { saleId } });
    
    return saleProducts;
  },
};

module.exports = saleProductsService;
