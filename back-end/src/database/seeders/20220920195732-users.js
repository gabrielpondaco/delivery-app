'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    return await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "Delivery App Admin",
        email: "adm@deliveryapp.com",
        password: "admin123",
        role: "administrator",
      },
      {
        id: 2,
        name: "Rafael Colombo",
        email: "rafael_colombo@deliveryapp.com",
        password: "seller123",
        role: "seller",
      },
      {
        id: 3,
        name: "Lucas Quintela",
        email: "quintela_lucas@email.com",
        password: "client123",
        role: "client",
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete("users", null, {});
  },
};