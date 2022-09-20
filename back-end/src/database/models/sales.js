'use strict';
const { Model, DataTypes } = require('sequelize');

class Sales extends Model {
  static associate(models) {
    Sales.belongsTo(models.Users, {
      foreignKey: 'user_id',
      as: 'user',
    });
    Sales.belongsTo(models.Users, {
      foreignKey: 'seller_id',
      as: 'seller',
    });
    Sales.hasMany(models.SalesProducts, {
      foreignKey: 'sale_id',
      as: 'salesProducts',
    });
  }
}

Sales.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  total_price: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
  },
  delivery_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  delivery_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'sales',
  timestamps: false,
});

module.exports = Sales;