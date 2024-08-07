const mongoose = require("mongoose");
const ProjectModel = require("./models/Projects");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "https://sukhontharat-portfolio.onrender.com/",
    credentials: true,
  })
);
app.use(express.json());

require("dotenv").config();
const API_KEY = process.env.API_KEY;
console.log(API_KEY);
mongoose.connect(
  `mongodb+srv://sukhontharatw:${API_KEY}@cluster0.2d8dkvp.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0`
);

app.get("/getProjects", async (req, res) => {
  try {
    let result = await ProjectModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

const port = process.env.PORT || 3001;
console.log(port);
app.listen(port, () => {
  console.log("Server is running...");
});
