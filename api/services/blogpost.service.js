const { BlogPost } = require('../models/blogpost.model');

const createBlogPost = async (data) => {
    const { therapist_id, blog_title, content } = data;

    try {
        const blogpost = await BlogPost.create({ therapist_id: therapist_id, blog_title: blog_title, content: content });
        if (blogpost) {
            return { status: 200, message: "Blogpost created successfully" }
        }
    } catch (error) {
        console.log(error)
        return { status: 500, message: 'Internal server error' };
    }
}

const getBlogPostsByTherapist = async (data) => {
    const therapist_id = data;
    try {
        const blogpost = await BlogPost.findAll({ where: { therapist_id: therapist_id } });
        if (blogpost) {
            return { status: 200, message: "BlogPosts found", blogpost: blogpost }
        }
        else {
            return { status: 404, message: "Not found" }
        }
    } catch (error) {
        console.log(error)
        return { status: 500, message: "Internal server error" }
    }

}

const getBlogPostByTitle = async (data) => {
    const blog_title = data;
    try {
        const blogpost = await BlogPost.findAll({ where: { blog_title: blog_title } })
        if (blogpost) {
            return { status: 200, message: "BlogPost found", blogpost: blogpost }
        }
        else {
            return { status: 404, message: "Not found" }
        }
    } catch (error) {
        return { status: 500, message: "Internal server error" }
    }

}

const updateBlogPost = async (data) => {
    const { blog_id, blog_title, content } = data;
    try {
        const blogpost = await BlogPost.findOne({ where: { blog_id: blog_id } });
        if (blogpost) {
            await blogpost.update({ blog_title: blog_title, content: content });
            return { status: 200, message: "Blog updated successfully" };
        } else {
            return { status: 404, message: "Blog not found" };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, message: 'Internal server error' };
    }

}

module.exports = {
    createBlogPost,
    getBlogPostByTitle,
    getBlogPostsByTherapist,
    updateBlogPost
}