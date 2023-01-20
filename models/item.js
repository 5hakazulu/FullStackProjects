'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
      static associate(models) {
        Item.belongsTo(models.Consignor, {
            foreignKey: 'consignorId',
            onDelete: 'CASCADE'
        });
        Item.belongsTo(models.Auction, {
          foreignKey: 'auctionId',
          onDelete: 'CASCADE'
      });
    }
  }
  Item.init({
    itemName: DataTypes.STRING,
    itemPictures: DataTypes.STRING,
    itemDescription: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};