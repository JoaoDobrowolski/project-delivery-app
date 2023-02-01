const db = require('../../database/models');

const salesService = {
  registerProducts: async (saleData, saleId) => {
    saleData.saleProducts.forEach(async (product) => {
      await db.SaleProduct.create({
        saleId,
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
      status: 'Pendente',
      saleDate: newDate,
    });

    await salesService.registerProducts(saleData, sale.id);
    
    return { ...sale.dataValues, saleProducts: saleData.saleProducts };
  },

  getUserSales: async (userId) => {
    const userSales = await db.Sale.findAll({ where: { userId } });
    
    if (userSales.length === 0) {
      const sellerSales = await db.Sale.findAll({ where: { sellerId: userId } });

      return sellerSales;
    }
    
    return userSales;
  },

  updateStatus: async (saleId, saleStatus) => {
    const updateStatus = await db.Sale.update(saleStatus, { where: { id: saleId } });
    
    return updateStatus;
  },
};

module.exports = salesService;
