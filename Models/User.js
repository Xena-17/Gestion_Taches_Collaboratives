const {Model, DataTypes} = require("sequelize");
const sequelize = require('../Config/Sequelize');

class User extends Model {

}

User.init({
    US_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    US_Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    US_Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    US_Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{ sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false
    
})

module.exports = User;

