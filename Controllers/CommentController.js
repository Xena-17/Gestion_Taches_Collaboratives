const { UPDATE } = require('sequelize/lib/query-types');
const CommentService = require('../Services/CommentService');

class CommentController{
    async getAllComment(req, res){
        try {
            const Comment = await CommentService.getAllComment();
            res.json(Comment);
        } catch (error) {
            //console.log(error);
            res.status(500);
            res.json({message: "une erreur est survenue lors de la récupération du commentaire"})
        } 
}
async getCommentById(req, res){
    try {
        const Comment = await CommentService.getAllComment();
        res.json(Comment);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la récupération du commentaire"})
    }
}

async addComment(req, res){
    try {
        const newComment = await CommentService.addComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de l'ajout d'un commentaire"})
    }
}

async updateComment(req, res){
    try {
        const updateComment = await CommentService.updateComment(req.params.id, req.body);
        res.json(updatedComment);
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la mise à jour du commentaire"})
    }
}

async deleteComment(req, res){
    try {
        const comment = await CommentService.deleteComment(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500);
        res.json({message: "une erreur est survenue lors de la suppression du commentaire"})
    }

}
}

module.exports = new CommentController()