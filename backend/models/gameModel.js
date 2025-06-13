const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Game = sequelize.define('Game', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'games',
  timestamps: false
});

module.exports = Game;
