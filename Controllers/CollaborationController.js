const { UPDATE } = require('sequelize/lib/query-types');
const CollaborationService = require('../Services/CollaborationService');

class CollaborationController{
    async getAllCollaboration(req, res){
        try {
            const Collaboration = await CollaborationService.getAllCollaboration();
            res.json(Collaboration);
        } catch (error) {
            //console.log(error);
            res.status(500);
            res.json({message: "une erreur est survenue lors de la récupération de la collaboration"})
        } 
}
async getCollaborationById(req, res){
    try {
        const Collaboration = await CollaborationService.getAllCollaboration();
        res.json(Collaboration);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la récupération de la collaboration"})
    }
}

async addCollaboration(req, res){
    try {
        const newCollaboration = await CollaborationService.addCollaboration(req.body);
        res.status(201).json(newCollaboration);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de l'ajout d'une collaboration"})
    }
}

async updateCollaboration(req, res){
    try {
        const updateCollaboration = await CollaborationService.updateCollaboration(req.params.id, req.body);
        res.json(updatedCollaboration);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la mise à jour de la collaboration"})
    }
}

async deleteCollaboration(req, res){
    try {
        const collaboration = await CollaborationService.deleteCollaboration(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la suppression de la collaboration"})
    }

}
}

module.exports = new CollaborationController()