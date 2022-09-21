'use strict';
const { DataTypes } = require('sequelize');

const attibutes = {
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
}

const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', attibutes, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });
  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts, {
      foreignKey: 'id',
      as: 'sale_id',
    });
    Products.hasMany(models.SalesProducts, {
      foreignKey: 'id',
      as: 'product_id',
    });
  }
  return Products;
}
module.exports = Products;