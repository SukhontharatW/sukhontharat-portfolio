const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProjectModel = require("./models/Projects");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;
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

// app.post("/createProject", async (req, res) => {
//   const project = await req.body;
//   const newProject = new ProjectModel(project);
//   await newProject.save();
//   res.json(project);
// });
const port = process.env.PORT || 3001;
console.log(port);
app.listen(port, () => {
  console.log("Server is running...");
});
