const { UPDATE } = require('sequelize/lib/query-types');
const UserService = require('../Services/UserService');

class UserController{
    async getAllUser(req, res){
        try {
            const users = await UserService.getAllUser();
            Result.json(users);
        } catch (error) {
            result.status(500);
            result.json({message: "une erreur est survenue lors de la récupération des utilisateurs"})
        } 
}
async getUserById(req, res){
    try {
        const user = await UserService.getAllUser();
        Result.json(user);
    } catch (error) {
        result.status(500);
        result.json({message: "une erreur est survenue lors de la récupération de l'identifiant des utilisateurs"})
    }
}

async addUser(req, res){
    try {
        const newUser = await UserService.addUser(req.body);
        Result.status(201).json(newUser);
    } catch (error) {
        result.status(500);
        result.json({message: "une erreur est survenue lors de l'ajout d'un utilisateur"})
    }
}

async updateUser(req, res){
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        Result.json(updatedUser);
    } catch (error) {
        result.status(500);
        result.json({message: "une erreur est survenue lors de la mise à jour de l'utilisateur"})
    }
}

async deleteUser(req, res){
    try {
        await UserService.deleteUser(req.params.id);
        Result.status(204).send();
    } catch (error) {
        result.status(500);
        result.json({message: "une erreur est survenue lors de la suppression de l'utilisateur"})
    }

}
}

module.exports = new UserController()