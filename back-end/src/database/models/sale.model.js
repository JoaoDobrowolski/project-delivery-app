const Sale = (sequelize, DataTypes) => {

  const Sale = sequelize.define('Sale', {

    id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: DataTypes.INTEGER,
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

  Sale.associate = (models) => {
    Sale.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user' },      
    );
    Sale.belongsTo(
      models.User,
      { foreignKey: 'sellerId', as: 'sellerUser' },      
    );
  };

  return Sale;

};

module.exports = Sale;
