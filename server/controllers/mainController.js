const express = require("express");
var mysql = require("mysql");
const router = express.Router();
const con = require("../services/db");

router.get("/test", (req, res) => {
  res.send("Test route in main controller");
  con.connect((err) => {
    if (err) throw err;
    console.log("Connected to database");
  });
});

module.exports = router;
