const express = require("express");
var mysql = require("mysql");
const router = express.Router();
const todoOps = require("../services/todoOps");

router.get("/test", async (req, res) => {
  res.json(await todoOps.getCurrentTasks());
});

module.exports = router;
