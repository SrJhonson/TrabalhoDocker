const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const gameRoutes = require('./routes/games');
const connectWithRetry = require('./db'); // usa conexão com retry
require('./models/gameModel'); // importa o model para registrar antes do sync

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/games', gameRoutes);

connectWithRetry()
  .then(async (sequelize) => {
    await sequelize.sync(); // sincroniza a tabela 'games'
    console.log('✅ Tabela sincronizada!');
    app.listen(PORT, () => {
      console.log(`🚀 Backend rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar ou sincronizar com o banco:', err.message);
  });
