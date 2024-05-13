const {
    createComment,
    getCommentsByBlog
} = require('../services/comment.service');
require('dotenv').config();

const createCommentController = async (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        console.log(comment)
        return res.status(400).json({ message: "missing data" });
    }
    const result = await createComment(comment);
    // blogpost successfully inserted
    if (result.status === 201) {
        return res.status(201).json({ message: result.message, comment: result.comment })
    }
    return res.status(500).json({ message: result.message });
}

const getCommentsByBlogController = async (req, res) => {
    const blog_id = req.query.id;
    const result = await getCommentsByBlog(blog_id);
    if (!result) {
        return res.status(400).json({ message: "Missing data" })
    }

    if (result.status === 200) {
        console.log(result.message, result.comments);
        return res.status(200).json({ message: result.message, comment: result.comments });
    }
    console.log(result.message);
    return res.status(500).json({ message: result.message });
}


module.exports = {
   createCommentController,
   getCommentsByBlogController
}