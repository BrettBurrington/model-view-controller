const Sequelize = require('sequelize');


const DB_NAME = 'blog_db';
const DB_USER = 'root';
const DB_PASSWORD = 'password';
const DB_HOST = 'localhost'; 
const DB_PORT = 3306; 


const sequelize = new Sequelize(blog_db, root, password, {
  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT,
});

module.exports = sequelize;
