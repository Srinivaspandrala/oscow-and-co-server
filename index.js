const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, task: "Wake up", status: "Completed" },
  { id: 2, task: "Breakfast", status: "Pending" },
  { id: 3, task: "Lunch", status: "Pending" },
];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.json(newTask);
});

// Mark task as completed
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, status: "Completed" } : task
  );
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
