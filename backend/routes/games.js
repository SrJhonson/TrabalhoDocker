const express = require('express');
const router = express.Router();
const Game = require('../models/gameModel');

// [GET] Buscar todos os jogos
router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll();
    console.log('📦 Games retornados:', games); // 👈 Adiciona esse log
    res.json(games);
  } catch (err) {
    console.error('❌ Erro no GET /games:', err); // 👈 E esse
    res.status(500).json({ error: 'Erro ao buscar jogos' });
  }
});


// [POST] Criar um novo jogo
router.post('/', async (req, res) => {
  const { title, genre, platform } = req.body;
  try {
    const newGame = await Game.create({ title, genre, platform });
    res.status(201).json(newGame);
  } catch (err) {
    console.error('Erro ao criar jogo:', err);
    res.status(500).json({ error: 'Erro ao criar jogo' });
  }
});

// [DELETE] Remover um jogo por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Game.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Jogo excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Jogo não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao excluir jogo:', err);
    res.status(500).json({ error: 'Erro ao excluir jogo' });
  }
});

module.exports = router;
