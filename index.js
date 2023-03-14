const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");

const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => console.log("successfully connected to our db"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("mongo container added");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port : ${port}`));
