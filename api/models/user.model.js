const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // password must be 8 characters long and contain at least one uppercase and one digit
            isStrongPassword: function (value) {
                if (value.length < 8 || !/\d/.test(value) || !/[A-Z]/.test(value)) {
                    throw new Error('Password lenght must be at least 8 and contain at least one digit and one uppercase letter.')
                }
            }
        }
    },
    role: {
        type: DataTypes.ENUM('therapist', 'patient'),
        allowNull: false
    }
},{
    tableName: 'user',// Explicitly define the table name
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = { User };