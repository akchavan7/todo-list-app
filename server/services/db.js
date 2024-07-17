const mysql = require("mysql2/promise");

const config = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectTimeout: 60000,
};

console.log(config);

async function query(sql, params) {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(sql, params);

  return results;
}

module.exports = { query };
