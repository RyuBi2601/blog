require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/index.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/create.html'));
});

app.get('/detail/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'view/detail.html'));
});

// API lấy tất cả bài viết
app.get('/api/posts', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
  res.json(rows);
});

// API lấy chi tiết bài viết
app.get('/api/posts/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM posts WHERE id = ?', [req.params.id]);
  res.json(rows[0]);
});

// API thêm bài viết mới
app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  await db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
  res.json({ message: 'Post created' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
