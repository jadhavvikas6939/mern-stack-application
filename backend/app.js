
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/merncrud");

const User = require("./models/User");

app.post("/add", async (req,res)=>{
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get("/users", async (req,res)=>{
  const users = await User.find();
  res.send(users);
});

app.listen(5000, ()=>console.log("Server running on 5000"));
