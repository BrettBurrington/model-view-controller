const Sequelize = require('sequelize');

// Replace these with your actual database credentials
const DB_NAME = 'your_database_name';
const DB_USER = 'your_database_user';
const DB_PASSWORD = 'your_database_password';
const DB_HOST = 'localhost'; // Change if your database is hosted elsewhere
const DB_PORT = 3306; // Change if your database is using a different port

// Create a Sequelize instance and establish a connection to the database
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql', // Change to your preferred database dialect
  port: DB_PORT,
});

module.exports = sequelize;
