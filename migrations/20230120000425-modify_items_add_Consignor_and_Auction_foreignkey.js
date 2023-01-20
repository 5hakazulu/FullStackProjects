"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Items", "auctionId", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Auctions',
          key: 'id',
          as: 'auctionId'
  }
      }),
      queryInterface.addColumn("Items", "consignorId", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Consignors",
          key: "id",
          as: "consignorId",
        },
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("Item", "auctionId"),
      queryInterface.removeColumn("Item", "consignorId"),
    ]);
  },
};
