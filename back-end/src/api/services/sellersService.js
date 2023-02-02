const db = require('../../database/models');

const sellersService = {
  getAll: async () => {
    const sellers = await db.User.findAll({ where: { role: 'seller' } });
    return sellers;
  },

  getSeller: async (id) => {
    const seller = await db.User.findOne({ where: { id } });
    return seller;
  },

  getById: async (sellerId) => {
    const sellers = await db.User.findOne({ where: [{ id: sellerId }, { role: 'seller' }] });
    if (sellers === null) {
      return { status: 404, message: 'This user is not a seller.' };
    }
    return sellers;
  },
};

module.exports = sellersService;
