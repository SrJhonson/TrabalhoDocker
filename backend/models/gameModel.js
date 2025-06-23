const { DataTypes } = require('sequelize');
const connectWithRetry = require('../db');

let Game;
let gameReady = false;

const getGameModel = async () => {
  if (gameReady) return Game;

  const sequelize = await connectWithRetry();

  Game = sequelize.define('Game', {
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
    tableName: 'games',     // nome fixo da tabela no banco
    timestamps: false       // desativa createdAt / updatedAt
  });

  await sequelize.sync();
  gameReady = true;

  console.log('✅ Model Game sincronizado com o banco!');
  return Game;
};

module.exports = getGameModel;
