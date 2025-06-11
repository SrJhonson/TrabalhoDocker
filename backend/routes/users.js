const express = require('express');
const router = express.Router();
const db = require('../db');

// CRUD básico
router.get('/', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM users');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  await db.execute('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.params.id]);
  res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
  await db.execute('DELETE FROM users WHERE id = ?', [req.params.id]);
  res.sendStatus(200);
});

module.exports = router;
