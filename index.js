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

app.use(express.json())

const postRouter = require("./routes/postRoutes") 
const userRouter = require("./routes/userRoutes") 

const mongoose = require("mongoose");

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => console.log("successfully connected to our db"))  
  .catch((e) => console.log(e)); 

app.get("/", (req, res) => {
  res.send("making blog app lettsg");
}); 


app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",userRouter)
 
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port : ${port}`)); 
