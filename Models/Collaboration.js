const {Model, DataTypes} = require("sequelize");
const sequelize = require('../Config/Sequelize');
const User = require('./User');
const Task = require('./Task');
class Collaboration extends Model {

}

Collaboration.init({
    US_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
        references: {
            model: 'User',
            key: 'US_ID'
            },
        allowNull: false
        },
        
    TA_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        foreignKey: true,
        references: {
            model: 'Task',
            key: 'TA_ID'
            },
        allowNull: false
        }

    
},
    {sequelize,
        modelName: 'Collaboration',
        tableName: 'to_collaborate',
        timestamps: false
    
})

Task.hasMany(Collaboration, {as : 'tasks', foreignKey: 'TA_ID'});
Collaboration.belongsTo(User, {as : 'User', foreignKey : 'US_ID'});

module.exports = Collaboration;

