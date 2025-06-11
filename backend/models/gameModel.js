const db = require('../db');

async function getAllGames() {
  const [rows] = await db.execute('SELECT * FROM games');
  return rows;
}

async function createGame(title, genre, platform) {
  await db.execute('INSERT INTO games (title, genre, platform) VALUES (?, ?, ?)', [title, genre, platform]);
}

async function updateGame(id, title, genre, platform) {
  await db.execute('UPDATE games SET title = ?, genre = ?, platform = ? WHERE id = ?', [title, genre, platform, id]);
}

async function deleteGame(id) {
  await db.execute('DELETE FROM games WHERE id = ?', [id]);
}

module.exports = {
  getAllGames,
  createGame,
  updateGame,
  deleteGame
};