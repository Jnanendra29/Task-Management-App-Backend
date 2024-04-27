const express = require("express");

//required the controller functions
const {
  addTask,
  getTasks,
  getATask,
  updateTask,
  deleteTask,
} = require("../Controller/taskController");

const router = express.Router();

//POST request to add a task 
router.post("/addTask", addTask);

//GET request to get all the tasks
router.get("/allTasks", getTasks);

//GET request to get a task by ID
router.get("/task/:taskId", getATask);

//PUT request to update a task by ID
router.put("/task/:taskId", updateTask);

//DELETE request to delete a task by ID
router.delete("/task/:taskId", deleteTask);

module.exports = router;
