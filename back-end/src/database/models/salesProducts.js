'use strict';
const { Model, DataTypes } = require('sequelize');

class SalesProducts extends Model {
  static associate(models) {
    SalesProducts.belongsTo(models.Sales, {
      foreignKey: 'sale_id',
      as: 'sales',
    });
    SalesProducts.belongsTo(models.Products, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }
}

SalesProducts.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'salesProducts',
  timestamps: false,
});

module.exports = SalesProducts;