const Task = require('../Models/Task');

class TaskService {
    async getAllTask() {
        return await Task.findAll();

}

async getTaskById(TaskId) {
    return await Task.findByPk(TaskId);
}

async addTask(task){
    return await Task.create(task);
}

async updateTask(TaskId, updatedTask) {
    return await Task.update(TaskId, {
        where: { 
            TA_ID : id
        }
    })
          
} 

async deleteTask(TaskId) {
    return await Task.destroy({
        where: {
            TA_ID : id
        }
    });
}
}

module.exports = new TaskService();