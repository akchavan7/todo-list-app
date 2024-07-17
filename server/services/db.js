const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
};

console.log(config);

const con = mysql.createConnection(config);
module.exports = con;
