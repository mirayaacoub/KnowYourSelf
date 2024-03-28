const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const { User } = require("../models/user.model");

const Therapist = sequelize.define(
  "Therapist",
  {
    therapist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience_years: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: User.user_id
        }
    },
  },
  {
    tableName: "therapist", // Explicitly define the table name
    timestamps: false, // Disable createdAt and updatedAt
  }
);

module.exports = { Therapist };
