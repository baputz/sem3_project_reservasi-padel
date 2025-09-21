const express = require('express');
const path = require('path');
const db = require('./db'); // Pastikan baris ini ada
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// Endpoint API untuk mengambil semua data lapangan
app.get('/api/lapangan', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM lapangan');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching lapangan:', error);
    res.status(500).json({ error: 'Gagal mengambil data lapangan.' });
  }
});

app.listen(port, () => {
  console.log(`Server sedang berjalan di http://localhost:${port}`);
});