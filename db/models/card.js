'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Quest }) {
      this.hasMany(Quest, { foreignKey: 'cardId' });
    }
  }
  Card.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
