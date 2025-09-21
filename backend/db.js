const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'reservasi_padel',
  port: 3306 // Ubah port menjadi 3306
}).promise();

module.exports = pool;