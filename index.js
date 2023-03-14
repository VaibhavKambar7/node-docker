const express = require("express");
const app = express();

const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("mongo container added");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port : ${port}`));
