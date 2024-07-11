const User = require('../Models/User');

class UserService {
    async getAllUser() {
        return await User.findAll();

}

async getUserById(userId) {
    return await User.findByPk(userId);
}

async addUser(user) {
    return await User.create(user);
}

async updateUser(userId, updatedUser) {
    return await User.update(userId, {
        where: { 
            CA_ID : id
        }
    })
          
} 

async deleteUser(userId) {
    return await User.destroy({
        where: {
            CA_ID: userId
        }
    });
}
}

module.exports = new UserService;