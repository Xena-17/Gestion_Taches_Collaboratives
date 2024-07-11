const {Model, DataTypes} = require("sequelize");
const sequelize = require('../Config/Sequelize');
const User = require('./User');
class Task extends Model {

}

Task.init({
    TA_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TA_Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TA_Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TA_DueDate: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: true,
        defaultValue: new Date() 
    },
    US_ID: {
        type: DataTypes.INTEGER,
            references: {
            model: 'Users',
            key: 'US_ID'
        },
        allowNull: false
    }
},{ sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: false
    
})

User.hasmany(Task, {as : 'tasks', foreignKey: 'US_ID'});
Task.belongsTo(User, {as : 'User', foreignkey : 'US_ID'});

module.exports = Task;

