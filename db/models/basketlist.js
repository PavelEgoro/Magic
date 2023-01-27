const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasketList extends Model {
    static associate({ Basket, Card }) {
      this.belongsTo(Basket, { foreignKey: 'basket_id' });
      this.belongsTo(Card, { foreignKey: 'card_id' });
    }
  }
  BasketList.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    basket_id: {
      type: DataTypes.INTEGER,
    },
    card_id: {
      type: DataTypes.INTEGER,
    },
    count: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'BasketList',
  });
  return BasketList;
};
