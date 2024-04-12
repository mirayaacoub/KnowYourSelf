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
        return res.status(201).json({ message: result.message, blogpost: result.blogpost })
    }
    return res.status(500).json({ message: result.message });
}

const getBlogPostByTherapistController = async (req, res) => {
    const therapistId = req.query.therapistId;
    console.log(therapistId)

    const result = await getBlogPostsByTherapist(therapistId);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message, blogpost: result.blogpost });
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    return res.status(500).json({ message: result.message });

};

const getBlogPostByTitleController = async (req, res) => {
    const title = req.query.title;
    const result = await getBlogPostByTitle(title);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message, blogpost: result.blogpost });
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    return res.status(500).json({ message: result.message });
};

const updateBlogPostController = async (req, res) => {
    const { blogpost } = req.body;
    if (!blogpost) {
        return res.status(400).json({ message: "Missing data" });
    }
    const result = await updateBlogPost(blogpost);
    if (result.status === 200) {
        return res.status(200).json({ message: result.message });
    } else if (result.status === 404) {
        return res.status(404).json({ message: result.message });
    }
    return res.status(500).json({ message: result.message });
}

module.exports = {
    createBlogPostController,
    getBlogPostByTherapistController,
    getBlogPostByTitleController,
    updateBlogPostController
}