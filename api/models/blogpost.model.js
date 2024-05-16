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
        unique: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
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
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        onUpdate: sequelize.literal('CURRENT_TIMESTAMP')
    },
    
}, {
    tableName: 'blog_post',
    timestamps: false, // Disable createdAt and updatedAt
});
BlogPost.belongsTo(Therapist, { foreignKey: 'therapist_id', targetKey: 'therapist_id' });

module.exports = { BlogPost };