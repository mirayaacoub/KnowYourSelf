const { 
    createBlogPost, 
    getBlogPostByTitle, 
    getBlogPostsByTherapist, 
    updateBlogPost 
} = require('../services/blogpost.service');
require('dotenv').config();

const createBlogPostController = async (req, res) => {
    const { blogpost } = req.body;
    if (!blogpost) {
        console.log(blogpost)
        return res.status(401).json({ message: "missing data" });
    }
    const result = await createBlogPost(blogpost);
    // blogpost successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: "successful", blogpost: result.blogpost })
    }
    res.status(401).json({ message: result.message });
}

const getBlogPostByTherapistController = async (req, res) => {
    const therapistId = req.query.therapistId;
    console.log(therapistId)
    try {
        const result = await getBlogPostsByTherapist(therapistId);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error getting blog posts by therapist:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const getBlogPostByTitleController = async (req, res) => {
    const title = req.query.title;

    try {
        const result = await getBlogPostByTitle(title);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error getting blog post by title:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const updateBlogPostController = async (req, res) => {
    const { blogpost } = req.body;
    if (!blogpost) {
        return res.status(400).json({ message: "Missing data" });
    }
    try {
        const result = await updateBlogPost(blogpost);
        if (result.status === 200) {
            return res.status(200).json({ message: "Blogpost updated successfully" });
        } else if(result.status === 404) {
            return res.status(404).json({ message: "Blogpost not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }

}

module.exports = {
    createBlogPostController,
    getBlogPostByTherapistController,
    getBlogPostByTitleController,
    updateBlogPostController
}