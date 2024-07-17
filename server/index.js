const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT | 8080;

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

const mainController = require("./controllers/mainController");

app.use("/", mainController);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
