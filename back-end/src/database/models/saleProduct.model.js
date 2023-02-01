const SaleProduct = (sequelize, DataTypes) => {

  const SaleProduct = sequelize.define(
    'SaleProduct',
    {  
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'sale_id',
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'product_id',
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

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(
      models.Sale,
      { 
        foreignKey: 'saleId',
        as: 'Sales',
        otherKey: 'productId', 
        through: SaleProduct,
      }
    );
    SaleProduct.belongsTo(
      models.Product,
      { 
        foreignKey: 'productId', 
        as: 'Products', 
        otherKey: 'saleId', 
        through: SaleProduct,
      }
    );
  };

  return SaleProduct;

};

module.exports = SaleProduct;
  