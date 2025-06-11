const express = require('express');
const path = require('path');
const app = express();
const gameRoutes = require('./routes/games');
require('dotenv').config();

app.use(express.json());
app.use('/games', gameRoutes);
app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
