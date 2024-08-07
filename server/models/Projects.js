const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectId: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  code: { type: String, required: true },
  demo: {
    type: String,
    required: true,
  },
  release: { type: String, required: true },
  tech: {
    type: Array,
    required: true,
  },
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;
