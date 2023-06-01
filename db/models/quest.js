'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    static associate({ Card }) {
      this.belongsTo(Card, { foreignKey: 'cardId' });
    }
  }
  Quest.init(
    {
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cards',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Quest',
    }
  );
  return Quest;
};
