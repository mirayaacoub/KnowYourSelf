import { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import { getAllBlogposts } from "../services/blogpost"
import BlogPost from '../components/BlogPost';


const BlogsPage = () => {

    const [blogPosts, setBlogPosts] = useState<BlogPostData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
           const blogPostsData = await getAllBlogposts();
           setBlogPosts(blogPostsData);
           console.log(blogPostsData);
        }
        fetchData();
    }, [])

  return (
    <>
        <Navbar/>
        <div className='h-[12rem] bg-stone-100 flex flex-col justify-center items-center gap-y-[0.5rem]'>
           <h1 className='text-2xl font-extrabold'>Mind Matters: Exploring Mental Health</h1>
           <p className='max-w-[35rem] text-center'>
           Discover insightful articles, personal stories, and expert advice. Gain a deeper understanding and support for mental well-being.
           </p>
        </div>
        <div className='h-8'></div>

        <div className='h-[30rem] grid grid-cols-3 px-28 gap-x-10'>
        {blogPosts.map(blogPost => (
          <BlogPost
            key={blogPost.blog_id}
            blog_id={blogPost.blog_id}
            blog_title={blogPost.blog_title}
            content={blogPost.content}
            created_at={blogPost.created_at}
            updated_at={blogPost.updated_at}
            therapist_id={blogPost.therapist_id}
            Therapist={blogPost.Therapist}
          />
        ))}  
        </div>

        <div className='row'>
          
        </div>
    </>
  )
}

export default BlogsPage