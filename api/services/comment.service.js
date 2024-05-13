const { Comment }  = require('../models/comment.model')


const createComment = async (data) => {
    const { content, user_id, blog_id } = data;
    try {
        const comment = await Comment.create({content: content, user_id: user_id, blog_id: blog_id });
        return { status: 201, message: "Comment created successfully", comment: comment }
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }
}

const getCommentsByBlog = async (data) => {
    const blog_id  = data;
    try {
        const comments = await Comment.findAll({ where: { blog_id: blog_id } });
        if (comments) {
            return { status: 200, message: "Comments found", comments: comments }
        }
        else {
            return { status: 404, message: "Not found" }
        }
    } catch (error) {
        return { status: 500, message: "Internal server error" }
    }

}


module.exports = {
    createComment,
    getCommentsByBlog
}