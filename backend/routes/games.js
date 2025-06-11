const express = require('express');
const router = express.Router();
const gameModel = require('../models/gameModel');

router.get('/', async (req, res) => {
  const games = await gameModel.getAllGames();
  res.json(games);
});

router.post('/', async (req, res) => {
  const { title, genre, platform } = req.body;
  await gameModel.createGame(title, genre, platform);
  res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
  const { title, genre, platform } = req.body;
  await gameModel.updateGame(req.params.id, title, genre, platform);
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  await gameModel.deleteGame(req.params.id);
  res.sendStatus(200);
});

module.exports = router;