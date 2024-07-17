const execute = require("../helpers/queryRunner");

async function getCurrentTasks() {
  const rows = await execute(`SELECT * FROM todo_list`);
  return rows;
}

module.exports = { getCurrentTasks };
