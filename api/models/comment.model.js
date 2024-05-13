const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const { User } = require('../models/user.model');
const { BlogPost } = require('../models/blogpost.model')

const Comment = sequelize.define('Comment', {
    comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.STRING,
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
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: BlogPost,
            key: BlogPost.blog_id
        }
    },
}, {
    tableName: 'comments',// Explicitly define the table name
    timestamps: false, // Disable createdAt and updatedAt
});

module.exports = { Comment };