const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'aesthete'
});

db.connect((err) => {
    if (err) {
        console.error('Database Connection Failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

module.exports = db;
