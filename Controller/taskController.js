const taskModel = require("../Model/taskModel");

//Controller function to POST or ADD a task
const addTask = async (req, res) => {
  try {
    const { title, description, creationDate, status } = req.body;

    if (!title || !description)
      return res.status(400).json("Please enter BOTH title and description");
    if (status && !["pending", "in_progress", "completed"].includes(status)) {
      return res.status(400).send({
        error: "status should be of pending, in_progress or completed value",
      });
    }

    let task = new taskModel({ title, description, creationDate, status });

    await task.save();

    res.status(200).json({
      _id: task._id,
      title,
      description,
      creationDate: task.creationDate,
      status,
    });
  } catch (error) {
    console.log("Error from catch block", error);
    res.status(500).json({
      message:
        "If filled the creationDate field please do not fill or follow the given syntax YYYY-MM-DDTHH:MINMIN.SSSZ  ",
      error,
    });
  }
};

//Controller function to GET all tasks present
const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Some error occured", error });
  }
};

//Controller function to GET a task by its taskId
const getATask = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const task = await taskModel.findById(taskId);

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Task not find or It does not exists", error });
  }
};

//Controller function to UPDATE a task by its taskId
const updateTask = async (req, res) => {
  const taskId = req.params.taskId;
  const updates = req.body;

  if (
    updates.status &&
    !["pending", "in_progress", "completed"].includes(updates.status)
  ) {
    return res.status(400).send({
      error: "status should be of pending, in_progress or completed value",
    });
  }

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(taskId, updates, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ updatedTask, message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:
        "If filled the creationDate field please do not fill or follow the given syntax YYYY-MM-DDTHH:MINMIN.SSSZ  ",
      error,
    });
  }
};

//Controller function to DELETE a task by its taskId
const deleteTask = async (req, res) => {
  const taskId = req.params.taskId;
  try {
    const deletedTask = await taskModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error", error });
  }
};

module.exports = { addTask, getTasks, getATask, updateTask, deleteTask };
