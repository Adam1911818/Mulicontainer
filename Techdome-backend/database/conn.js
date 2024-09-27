const mysql = require('mysql2/promise');

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'user';
const dbPassword = process.env.DB_PASSWORD || 'userpassword';
const dbName = process.env.DB_NAME || 'techdome_db';

const connection = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
});

module.exports = connection;
