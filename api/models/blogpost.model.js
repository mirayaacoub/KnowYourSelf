const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const { Therapist } = require('../models/therapist.model');

const BlogPost = sequelize.define('BlogPost', {
    blog_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    therapist_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Therapist,
            key: Therapist.therapist_id
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
    
}, {
    tableName: 'blog_post',
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = { BlogPost };