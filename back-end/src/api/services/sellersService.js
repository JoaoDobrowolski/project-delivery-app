const db = require('../../database/models');

const sellersService = {
  getAll: async () => {
    const sellers = await db.User.findAll({ where: { role: 'seller' } });
    return sellers;
  },
};

module.exports = sellersService;
