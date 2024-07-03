const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,  // Nom du service Docker Compose pour PostgreSQL
  port: process.env.POSTGRES_PORT,         // Port exposé par PostgreSQL dans Docker
  username: 'postgres',
  password: 'pwd',
  database: 'pg',
});

const db = {
  Sequelize,
  sequelize
};

module.exports = db;
