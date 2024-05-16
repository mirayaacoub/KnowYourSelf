const { BlogPost } = require("../models/blogpost.model");
const { User } = require("../models/user.model");
const { Therapist } = require("../models/therapist.model");
const { getTherapist } = require("../services/therapist.service");
const { where } = require("sequelize");

const createBlogPost = async (data) => {
  const { user_id, blog_title, content, image } = data;

  try {
    console.log(user_id);
    const res = await getTherapist({ user_id });

    if (res.status === 200) {
      // If therapist is found, extract therapist data
      const therapist = res.therapist;

      // Create BlogPost with therapist_id
      const blogpost = await BlogPost.create({
        therapist_id: therapist.therapist_id,
        blog_title,
        content,
        image
      });

      if (blogpost) {
        return { status: 201, message: "Blogpost created successfully" };
      }
    } else {
      // Handle case where therapist is not found
      return { status: 404, message: "Therapist not found" };
    }
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeUniqueConstraintError") {
      return { status: 409, message: "The blogpost title is unique." };
    }
    return { status: 500, message: "Internal server error" };
  }
};

const getAllBlogPosts = async () => {
  try {
    const blogs = await BlogPost.findAll({
      include: [
        {
          model: Therapist,
          attributes: ["therapist_id"],
          include: [
            {
              model: User,
              attributes: ["username", "email"],
            },
          ],
        },
      ],
    });
    if (blogs) {
      return { status: 200, message: "Blogs found", blogs: blogs };
    } else {
      return { status: 404, message: "Blogs not found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

const getBlogPostsByTherapist = async (data) => {
  // const therapist_id = data;
  const user_id = data;
  try {
    const res = await getTherapist({ user_id });
    if (res.status === 200) {
      // If therapist is found, extract therapist data
      const therapist = res.therapist;
      const blogpost = await BlogPost.findAll({
        where: { therapist_id: therapist.therapist_id },
      });
      if (blogpost.length > 0) {
        return { status: 200, message: "BlogPosts found", blogpost: blogpost };
      }
    } else {
      return { status: 404, message: "No BlogPost found" };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Internal server error" };
  }
};

const getBlogPostByTitle = async (blog_title) => {
  try {
    const blogpost = await BlogPost.findAll({
      include: [
        {
          model: Therapist,
          attributes: ["therapist_id"],
          include: [
            {
              model: User,
              attributes: ["username", "email"],
            },
          ],
        },
      ],
      where: { blog_title: blog_title },
    });

    if (blogpost.length > 0) {
      return { status: 200, message: "BlogPost found", blogpost: blogpost[0] };
    } else {
      return { status: 404, message: "No BlogPost found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

const getBlogPostById = async (data) => {
  const blog_id = data;
  try {
    const blogpost = await BlogPost.findOne({
      where: { blog_id: blog_id },
    });
    if (blogpost) {
      return { status: 200, message: "BlogPost found", blogpost: blogpost };
    } else {
      return { status: 404, message: "No BlogPost found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

const updateBlogPost = async (data) => {
  const { blog_id, blog_title, content } = data;
  try {
    const blogpost = await BlogPost.findOne({ where: { blog_id: blog_id } });
    if (blogpost) {
      await blogpost.update({
        blog_title: blog_title,
        content: content,
        updated_at: new Date(),
      });
      return { status: 200, message: "Blog updated successfully" };
    } else {
      return { status: 404, message: "Blog not found" };
    }
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Internal server error" };
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostByTitle,
  getBlogPostsByTherapist,
  getBlogPostById,
  updateBlogPost,
};
