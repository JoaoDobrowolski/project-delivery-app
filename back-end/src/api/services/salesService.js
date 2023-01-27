const db = require('../../database/models');

const salesService = {
  registerProducts: async (saleData) => {
    console.log('teste --> ', saleData);
    saleData.saleProducts.forEach(async (product) => {
      await db.SaleProduct.create({
        saleId: saleData.userId,
        productId: product.productId,
        quantity: product.quantity,
      });
    });
  },
  createSale: async (saleData) => {
    const sale = await db.Sale.create({
      userId: saleData.userId,
      sellerId: saleData.sellerId,
      totalPrice: saleData.totalPrice,
      deliveryAddress: saleData.deliveryAddress,
      deliveryNumber: saleData.deliveryNumber,
      status: 'pendente',
    });

    await salesService.registerProducts(saleData);
    
    return sale;
  },
};

module.exports = salesService;
