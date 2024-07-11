const Comment = require('../Models/Comment');

class CommentService {
    async getAllComment() {
        return await Comment.findAll();

}

async getCommentById(CommentId) {
    return await Comment.findByPk(CommentId);
}

async addComment(comment){
    return await Comment.create(comment);
}

async updateComment(CommentId, updatedComment) {
    return await Comment.update(CommentId, {
        where: { 
            CM_ID : id
        }
    })
          
} 

async deleteComment(CommentId) {
    return await Comment.destroy({
        where: {
            CM_ID : id
        }
    });
}
}

module.exports = new CommentService();