const express = require("express");
var mysql = require("mysql");
const router = express.Router();
const todoOps = require("../services/todoOps");

router.get("/getCurrentTasks", async (req, res, next) => {
  try {
    res.json(await todoOps.getCurrentTasks());
  } catch (err) {
    console.log(`Error while fetching current tasks`);
    next(err);
  }
});

router.get("/getArchivedTasks", async (req, res, next) => {
  try {
    res.json(await todoOps.getArchivedTasks());
  } catch (err) {
    console.log(`Error while fetching archived tasks`);
    next(err);
  }
});

router.get("/getMostRecentID", async (req, res, next) => {
  try {
    res.json(await todoOps.getMostRecentID());
  } catch (err) {
    console.log(`Error while fetching most recent ID`);
    next(err);
  }
});

router.post("/addTask", async (req, res, next) => {
  try {
    const text = req.body.text;
    res.json(await todoOps.addTask(text));
  } catch (err) {
    console.log(`Error while trying to add a new task`);
    next(err);
  }
});

router.post("/updateTask", async (req, res, next) => {
  try {
    const id = req.body.id;
    const updatedText = req.body.updatedText;
    res.json(await todoOps.updateTask(id, updatedText));
  } catch (err) {
    console.log(`Error while trying to update the task`);
    next(err);
  }
});

router.post("/markDone", async (req, res, next) => {
  try {
    const id = req.body.id;
    res.json(await todoOps.markDone(id));
  } catch (err) {
    console.log(`Error while trying to marking task as done`);
    next(err);
  }
});

router.post("/markUndone", async (req, res, next) => {
  try {
    const id = req.body.id;
    res.json(await todoOps.markUndone(id));
  } catch (err) {
    console.log(`Error while trying to marking task as undone`);
    next(err);
  }
});

module.exports = router;
