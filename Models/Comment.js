const {Model, DataTypes} = require("sequelize");
const sequelize = require('../Config/Sequelize');
const Comment = require('./Comment');
class Comment extends Model {

}

Comment.init({
    CM_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CM_Comment: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    
    TA_ID: {
        type: DataTypes.INTEGER,
            references: {
            model: 'Task',
            key: 'TA_ID'
        },
        allowNull: false
    },

    US_ID: {
    type: DataTypes.INTEGER,
        references: {
        model: 'User',
        key: 'US_ID'
        },
    allowNull: false
    }
},
    {sequelize,
        modelName: 'Comment',
        tableName: 'comments',
        timestamps: false
    
})

Task.hasMany(Comment, {as : 'tasks', foreignKey: 'TA_ID'});
Comment.belongsTo(User, {as : 'User', foreignKey : 'US_ID'});

module.exports = Comment;

