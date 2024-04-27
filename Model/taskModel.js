const mongoose = require("mongoose");

//defined the model schema 
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending",
  },
});

const taskModel = mongoose.model("Tasks", taskSchema);

module.exports = taskModel;
