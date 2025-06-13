const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const gameRoutes = require('./routes/games');
const sequelize = require('./db');
const Game = require('./models/gameModel'); // ⬅️ Importa o model para sync

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/games', gameRoutes);

// Teste de conexão + sincronização da tabela
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado ao banco de dados!');
    return sequelize.sync(); // ⬅️ Garante que a tabela 'games' exista
  })
  .then(() => {
    console.log('✅ Tabela sincronizada!');
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco:', err);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
