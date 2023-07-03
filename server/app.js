const express = require("express");
const app = express();

const dataBase = ["할1"];
app.get("/", function (req, res) {
  res.json(dataBase);
});

app.listen(4000);
