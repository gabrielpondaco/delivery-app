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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', attibutes, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
      foreignKey: 'id',
      as: 'user_id',
    });
    Users.hasMany(models.Sales, {
      foreignKey: 'id',
      as: 'seller_id',
    });
  }
  return Users;
}

module.exports = Users;