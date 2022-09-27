'use strict';
const { DataTypes } = require('sequelize');

const attibutes = {
  saleId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

const SaleProduct = (sequelize) => {
  const SalesProduct = sequelize.define('SalesProducts', attibutes , {	
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });
  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sales, {
      foreignKey: 'sale_id',
      as: 'sales',
    });
    SalesProduct.belongsTo(models.Products, {
      foreignKey: 'product_id',
      as: 'product',
    });
  }

  return SalesProduct;
};

module.exports = SaleProduct;