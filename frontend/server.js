const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(__dirname));

// Endpoint principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Escuta em todas as interfaces
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎮 Frontend no ar em http://0.0.0.0:${PORT}`);
});
