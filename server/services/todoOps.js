const execute = require("../helpers/queryRunner");

async function getCurrentTasks() {
  const rows = await execute(`SELECT * FROM todo_list WHERE status="Pending"`);
  return rows;
}

async function getArchivedTasks() {
  const rows = await execute(`SELECT * FROM todo_list WHERE status="Done"`);
  return rows;
}

async function getMostRecentID() {
  const rows = await execute(
    `SELECT id FROM todo_list ORDER BY id DESC LIMIT 1;`
  );
  return rows[0];
}

async function addTask(text) {
  const result = await execute(
    `INSERT INTO todo_list(text) values("${text}");`
  );
  if (result.affectedRows === 1) {
    return { status: 200, message: "New task added successfully" };
  }
  return { status: 401, message: "Could not add new task" };
}

async function updateTask(id, updatedText) {
  const result = await execute(
    `UPDATE todo_list SET text = "${updatedText}" WHERE id = ${id};`
  );
  if (result.affectedRows === 1) {
    return { status: 200, message: "Task has been updated successfully" };
  }
  return { status: 401, message: "Could not update the task" };
}

async function markDone(id) {
  const result = await execute(
    `UPDATE todo_list SET status = "Done" WHERE id = ${id};`
  );
  if (result.affectedRows === 1) {
    return { status: 200, message: "Task has been marked as done" };
  }
  return { status: 401, message: "Could not mark done" };
}

module.exports = {
  getCurrentTasks,
  getArchivedTasks,
  addTask,
  updateTask,
  getMostRecentID,
  markDone,
};
