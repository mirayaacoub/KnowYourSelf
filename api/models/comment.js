const express = require('express');
const {
    createCommentController,
    getCommentsByBlogController
} = require('../controllers/comment.controller')
const router = express.Router();

router.post('/', createCommentController);
router.get('/', getCommentsByBlogController);

module.exports = router;