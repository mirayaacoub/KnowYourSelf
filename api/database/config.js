require("dotenv").config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME || "kys_db",
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3307,
    dialect: "mysql",
  }
);

module.exports = sequelize;
