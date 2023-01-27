const SalesProduct = (sequelize, DataTypes) => {

  const SalesProduct = sequelize.define(
    'SaleProduct',
    {  
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      }

    },
    {
      tableName: 'sales_products',
      underscored: false,
      timestamps: false,
    },
  );

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(
      models.Sale,
      { 
        foreignKey: 'saleId',
        as: 'Sales',
        otherKey: 'productId', 
        through: SalesProduct,
      }
    );
    SalesProduct.belongsTo(
      models.Product,
      { 
        foreignKey: 'productId', 
        as: 'Products', 
        otherKey: 'saleId', 
        through: SalesProduct,
      }
    );
  };

  return SalesProduct;

};

module.exports = SalesProduct;
  