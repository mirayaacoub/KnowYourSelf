const express = require("express");
const {
  createBlogPostController,
  getAllBlogPostsController,
  getBlogPostByTherapistController,
  getBlogPostByTitleController,
  updateBlogPostController,
  getBlogPostByIdController,
} = require("../controllers/blogpost.controller");
const router = express.Router();

router.post("/", createBlogPostController);
router.get("/", getAllBlogPostsController);
router.get("/therapist", getBlogPostByTherapistController);
router.get("/title", getBlogPostByTitleController);
router.get("/blog-id", getBlogPostByIdController);
router.put("/", updateBlogPostController);

module.exports = router;
