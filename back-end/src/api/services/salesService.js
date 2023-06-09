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

  getSale: async (id) => {
    const sale = await db.Sale.findOne({ where: { id } });

    const seller = await db.User.findOne({ where: { id: sale.sellerId } });

    const date = sale.saleDate;

    const result = {
      id: sale.id,
      saleDate: date,
      sellerId: sale.sellerId,
      status: sale.status,
      totalPrice: sale.totalPrice,
      userId: sale.userId,
      deliveryAddress: sale.deliveryAddress,
      deliveryNumber: sale.deliveryNumber,
      sellerName: seller.name,
    };
    
    return result;
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
