const express = require('express');
const { 
    createBlogPostController, 
    getBlogPostByTherapistController, 
    getBlogPostByTitleController, 
    updateBlogPostController
} = require('../controllers/blogpost.controller');
const router = express.Router();

router.post('/', createBlogPostController);
router.get('/', getBlogPostByTherapistController);
router.get('/title', getBlogPostByTitleController);
router.put('/', updateBlogPostController)

module.exports = router;
