const express = require("express");
var mysql = require("mysql");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Test route in main controller");
});

module.exports = router;
