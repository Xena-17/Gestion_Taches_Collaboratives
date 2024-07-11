const { UPDATE } = require('sequelize/lib/query-types');
const TaskService = require('../Services/TaskService');

class TaskController{
    async getAllTask(req, res){
        try {
            const tasks = await TaskService.getAllTask();
            res.json(tasks);
        } catch (error) {
            console.log(error);
            res.status(500);
            res.json({message: "une erreur est survenue lors de la récupération des tâches en cours"})
        } 
}
async getTaskById(req, res){
    try {
        const task = await Taskservice.getAllTask();
        res.json(task);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la récupération des tâches en cours"})
    }
}

async addTask(req, res){
    try {
        const newTask = await TaskService.addTask(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de l'ajout d'une tâche"})
    }
}

async updateTask(req, res){
    try {
        const updateTask = await TaskService.updateTask(req.params.id, req.body);
        res.json(updatedTask);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la mise à jour de la tâche"})
    }
}

async deleteTask(req, res){
    try {
        const task = await TaskService.deleteTask(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la suppression de la tâche"})
    }

}
}

module.exports = new TaskController()