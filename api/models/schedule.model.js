const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const { Patient } = require('../models/patient.model');
const { Therapist } = require('../models/therapist.model');

const Schedule = sequelize.define('Schedule', {
    schedule_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isBooked: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    therapist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Therapist,
            key: Therapist.therapist_id
        }
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Patient,
            key: Patient.patient_id
        }
    },
    // indexes: [
    //     {
    //       unique: true,
    //       fields: ['date_time','therapist_id']
    //     }
    //   ]
}, {
    tableName: 'schedule',
    timestamps: false,
});

module.exports = { Schedule };