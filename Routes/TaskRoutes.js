const express = require('express');
const router = express.Router();
const TaskController = require('../Controllers/TaskController');

router.get("/", (request, result) => {TaskController.getAllTask(request, result);});
router.get("/:id", (request, result) => {TaskController.getTaskById(request, result);});
router.post("/ ", (request, result) => {TaskController.addTask(request, result);});
router.patch("/:id", (request, result) => {TaskController.updateTask(request, result);});
router.delete("/:id", (request, result) => (TaskController).deleteTaskById(request, result));

module.exports = router;