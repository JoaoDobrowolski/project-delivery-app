const db = require('../../database/models');

const salesService = {
  registerProducts: async (saleData, saleId) => {
    console.log('teste --> ', saleData);
    saleData.saleProducts.forEach(async (product) => {
      await db.SaleProduct.create({
        saleId: saleId,
        productId: product.productId,
        quantity: product.quantity,
      });
    });
  },

  createSale: async (saleData) => {
   const newDate = new Date();
    newDate.setUTCDate(newDate.getUTCDate());
    const sale = await db.Sale.create({
      userId: saleData.userId,
      sellerId: saleData.sellerId,
      totalPrice: saleData.totalPrice,
      deliveryAddress: saleData.deliveryAddress,
      deliveryNumber: saleData.deliveryNumber,
      status: 'pendente',
      saleDate: newDate,
    });

    await salesService.registerProducts(saleData, sale.id);
    
    return sale;
  },
};

module.exports = salesService;
