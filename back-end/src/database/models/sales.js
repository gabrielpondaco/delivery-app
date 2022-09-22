const { DataTypes } = require('sequelize');

const attibutes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  deliveryAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saleDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'PREPARANDO',
    allowNull: false,
  },
};

const Sales = (sequelize) => {
  const Sales = sequelize.define('Sales', attibutes, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,    
  });

  return Sales;
};

module.exports = Sales;