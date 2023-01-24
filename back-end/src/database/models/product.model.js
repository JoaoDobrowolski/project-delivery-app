 const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: DataTypes.INTEGER,
         },
         name: {
           allowNull: false,
           type: DataTypes.STRING,
         },
         price: {
           allowNull: false,
           type: DataTypes.DECIMAL,
         },
         urlImg: {
           allowNull: false,
           type: DataTypes.STRING,
         },
    },
    {
        tableName: 'products',
        underscored: true,
        timestamps: false,
    });

    Product.associate = (models) => {
        Product.hasMany(models.SaleProduct, {
            foreignKey: "productId",
            as: "SalesProducts",
        });
    }
    
    return Product;
}

module.exports = Product;
