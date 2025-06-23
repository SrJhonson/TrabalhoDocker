const { Sequelize } = require('sequelize');
require('dotenv').config();

const MAX_RETRIES = 10;
const RETRY_DELAY = 3000;

async function connectWithRetry(retries = MAX_RETRIES) {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      logging: false,
    }
  );

  while (retries > 0) {
    try {
      await sequelize.authenticate();
      console.log('✅ Conectado ao banco de dados!');
      return sequelize;
    } catch (err) {
      console.log(`🔄 Tentando novamente... (${MAX_RETRIES - retries + 1})`);
      retries--;
      await new Promise(res => setTimeout(res, RETRY_DELAY));
    }
  }

  throw new Error('❌ Não foi possível conectar ao banco.');
}

module.exports = connectWithRetry;
