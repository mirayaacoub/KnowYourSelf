const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const { User } = require('../models/user.model');

const Patient = sequelize.define('Patient', {
    patient_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    diagnosis_history: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: User.user_id
        }
    },
}, {
    tableName: 'patient',// Explicitly define the table name
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = { Patient };