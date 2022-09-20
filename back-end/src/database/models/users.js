'use strict';
const {
  Model
} = require('sequelize');

class Users extends Model {
  static associate(models) {
    Users.hasMany(models.Sales, {
      foreignKey: 'id',
      as: 'user_id',
    });
    Users.hasMany(models.Sales, {
      foreignKey: 'id',
      as: 'seller_id',
    });
  }
}

Users.init({
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
}, {
  sequelize,
  modelName: 'users',
  timestamps: false
});

return Users;