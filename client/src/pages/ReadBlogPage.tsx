import { useCallback, useEffect, useState } from "react";
import { getBlogpostByTitle } from "../services/blogpost";
import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";

export default function ReadBlogPage() {
  let { title } = useParams();
  if (title === "" || title === undefined) {
    return <h1>NOT FOUND</h1>;
  }

  const [blogPost, setBlogPost] = useState<BlogPostData>();

  const fetchBlog = useCallback(async (title: string) => {
    const res = await getBlogpostByTitle(title);

    if (res.status === 200) {
      setBlogPost(res.data.blogpost);
    }
  }, []);

  useEffect(() => {
    fetchBlog(title);
  }, []);

  if (!blogPost) return <h1>404 - NOT FOUND</h1>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <img
          className="w-full h-52 object-cover rounded-md"
          src={
            "https://www.health.com/thmb/hN-NGS0dEiJc1O1njUcBtH85ggM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/psychiatrist-GettyImages-1433472018-d9221f4efcd34a07bf5e42945696cea6.jpg"
          }
          alt=""
        />
        <h1 className="text-5xl font-bold mb-4">{blogPost.blog_title}</h1>
        <p className="text-gray-600 text-lg mb-6">{blogPost.content}</p>
        <div className="flex items-center mt-6">
          <img
            className="w-10 h-10 rounded-full"
            src={
              "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
            }
            alt=""
          />
          <div className="ml-4">
            <p className="text-xl font-semibold">
              {blogPost.Therapist.User.username}
            </p>
            <p className="text-gray-500">
              {new Date(blogPost.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
