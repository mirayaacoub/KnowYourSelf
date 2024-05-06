const express = require('express');
const {
    createBlogPostController,
    getAllBlogPostsController,
    getBlogPostByTherapistController,
    getBlogPostByTitleController,
    updateBlogPostController,
} = require('../controllers/blogpost.controller');
const router = express.Router();

router.post('/', createBlogPostController);
router.get('/', getAllBlogPostsController);
router.get('/therapist', getBlogPostByTherapistController);
router.get('/title', getBlogPostByTitleController);
router.put('/', updateBlogPostController)

module.exports = router;
