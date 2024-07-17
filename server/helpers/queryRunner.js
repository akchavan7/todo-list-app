const db = require("../services/db");

async function execute(query) {
  let rows = await db.query(query);
  if (!rows) {
    rows = [];
  }
  return rows;
}

module.exports = execute;
