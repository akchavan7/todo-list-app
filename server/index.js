require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT | 8080;

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  preflightContinue: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

const mainController = require("./controllers/mainController");

app.use("/", mainController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
