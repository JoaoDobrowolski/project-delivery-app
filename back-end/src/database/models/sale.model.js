const Sale = (sequelize, DataTypes) => {

  const Sale = sequelize.define(
    'Sale',
    {
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
      underscored: false,
      timestamps: false,
      tableName: 'sales',
    },
  );

  Sale.associate = (models) => {
    Sale.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'user_id' },      
    );
    Sale.belongsTo(
      models.User,
      { foreignKey: 'sellerId', as: 'seller_id' },      
    );
  };

  return Sale;

};

module.exports = Sale;
