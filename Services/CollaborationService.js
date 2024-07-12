const Collaboration = require('../Models/Collaboration');

class CollaborationService {
    async getAllCollaboration() {
        return await Collaboration.findAll();

}

async getCollaborationById(UserId, TaskId) {
    return await Collaboration.findByPk(UserId, TaskId);
}

async addCollaboration(collaboration){
    return await Collaboration.create(collaboration);
}

async updateCollaboration(US_ID, updatedTask) {
    return await Collaboration.update(TaskId, {
        where: { 
            US_ID : id
        }
    })
          
} 

async deleteCollaboration(UserId, TaskId) {
    return await Collaboration.destroy({
        where: {
            US_ID : id
        }
    });
}
}

module.exports = new CollaborationService();