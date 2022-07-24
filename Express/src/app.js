const express = require("express");

const app = express();
const SERVER_PORT = 5001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(SERVER_PORT, () =>
  console.log("Server listening on port " + SERVER_PORT)
);
