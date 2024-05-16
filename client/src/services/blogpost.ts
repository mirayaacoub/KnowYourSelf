import axios, { AxiosResponse } from "axios";
import Requests from "./http-common";

export async function createBlogPosts(
  user_id: number,
  blog_title: string,
  content: string,
  image: string
): Promise<BlogPostData | string | void> {
  try {
    const res = await Requests.post("/blogpost", {
      blogpost: {
        user_id,
        blog_title,
        content,
        image,
      },
    });

    if (res.status === 201) {
      console.log("Blogpost created");
      return res.data.blogpost;
    } else if (res.status === 400) {
      console.log("Missing data");
    } else {
      console.log("Error", res.data.error || res.statusText);
      return res.statusText;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Request failed", error.response?.data || error.message);
    } else {
      console.error("Unexpected error", error);
    }
  }
}

export async function getAllBlogposts() {
  const res = await Requests.get("/blogpost");

  if (res.status === 400) {
    console.log("Missing data");
    return;
  } else if (res.status === 200) {
    return res.data.blogs;
  } else {
    console.log("Error", res.data.error);
    return res.statusText;
  }
}

export async function getBlogpostByTherapist(user_id: number) {
  const res = await Requests.get(`/blogost/therapist?id=${user_id}`);

  if (res.status === 400) {
    console.log("Missing data");
    return;
  } else if (res.status === 200) {
    return res.data.blogs;
  } else {
    console.log("Error", res.data.error);
    return res.statusText;
  }
}

export async function getBlogpostByID(
  blog_id: number,
): Promise<AxiosResponse<BlogPostData>> {
  return Requests.get(`/blogpost/blog-id?id=${blog_id}`);
}

export async function getBlogpostByTitle(title: string) {
  return Requests.get(`/blogpost/title?title=${title}`);
}

export async function updateBlogpost(
  user_id: number,
  blog_title: string,
  content: string,
) {
  const res = await Requests.put("blogpost", { user_id, blog_title, content });

  if (res.status === 200) {
    console.log("blogpost updated succesfully");
    return res;
  } else if (res.status === 404) {
    console.log("update failed; blogpost not found");
    return res;
  } else {
    console.log("update failed; error", res.data.error);
    return res;
  }
}
