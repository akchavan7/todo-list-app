const execute = require("../helpers/queryRunner");

async function getCurrentTasks() {
  const rows = await execute(`SELECT * FROM todo_list WHERE status="Pending"`);
  return rows;
}

async function getArchivedTasks() {
  const rows = await execute(`SELECT * FROM todo_list WHERE status="Done"`);
  return rows;
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

module.exports = { getCurrentTasks, getArchivedTasks, addTask, updateTask };
