'use strict';
const {
  Model, DataTypes
} = require('sequelize');

class Products extends Model {
  static associate(models) {
    Products.hasMany(models.SalesProducts, {
      foreignKey: 'id',
      as: 'sale_id',
    });
    Products.hasMany(models.SalesProducts, {
      foreignKey: 'id',
      as: 'product_id',
    });
  }
}
Products.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: false,
  },
  url_image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'products',
  timestamps: false,
});

module.exports = Products;