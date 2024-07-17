const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  connectionTimeout: 10000000,
};

const con = mysql.createConnection(config);

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});
