const Sale = (sequelize, DataTypes) => {

  const Sale = sequelize.define('Sale', {

    id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE, 
    status: DataTypes.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'sales',
  }
  );

  // Sale.associate = (models) => {
  //   Sale.belongsTo(
  //     models.User,
  //     { primaryKey: 'id', as: 'user' }
  //   );
  // };

  // Sale.associate = (models) => {
  //   Sale.belongsTo(
  //     models.User,
  //     { primaryKey: 'id', as: 'saleProducts' }
  //   );
  // };


  Sale.associate = (models) => {
    Sale.belongsTo(models.User, 
    {
      foreignKey: "userId", as: "user"});
    // Sale.belongsTo(models.User, {
    //   foreignKey: "sellerId", as: "sale"
    // })
}


  // BlogPost.associate = (db) => {
  //   BlogPost.belongsTo(
  //     db.User,
  //     { as: 'user', primaryKey: 'id' }
  //   );
  // }

  return Sale;

};

module.exports = SaleModel;
