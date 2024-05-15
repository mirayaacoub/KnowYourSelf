// import { useCallback, useEffect, useState } from "react";
// import { getBlogpostByTitle } from "../services/blogpost";
// import Navbar from "../components/NavBar";
// import FooterComponent from "../components/Footer";
// import { useParams } from "react-router-dom";

// export default function ReadBlogPage() {
//   let { title } = useParams();
//   if (title === "" || title === undefined) {
//     return <h1>NOT FOUND</h1>;
//   }

//   const [blogPost, setBlogPost] = useState<BlogPostData>();

//   const fetchBlog = useCallback(async (title: string) => {
//     const res = await getBlogpostByTitle(title);

//     if (res.status === 200) {
//       setBlogPost(res.data.blogpost);
//     }
//   }, []);

//   useEffect(() => {
//     fetchBlog(title);
//   }, []);

//   if (!blogPost) return <h1>404 - NOT FOUND</h1>;

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <img
//           className="w-full h-52 object-cover rounded-md"
//           src={
//             "https://www.health.com/thmb/hN-NGS0dEiJc1O1njUcBtH85ggM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/psychiatrist-GettyImages-1433472018-d9221f4efcd34a07bf5e42945696cea6.jpg"
//           }
//           alt=""
//         />
//         <h1 className="text-5xl font-bold mb-4">{blogPost.blog_title}</h1>
//         <p className="text-gray-600 text-lg mb-6">{blogPost.content}</p>
//         <div className="flex items-center mt-6">
//           <img
//             className="w-10 h-10 rounded-full"
//             src={
//               "https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
//             }
//             alt=""
//           />
//           <div className="ml-4">
//             <p className="text-xl font-semibold">
//               {blogPost.Therapist.User.username}
//             </p>
//             <p className="text-gray-500">
//               {new Date(blogPost.updated_at).toLocaleDateString()}
//             </p>
//           </div>
//         </div>
//       </div>
//       <FooterComponent />
//     </>
//   );
// }

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogpostByTitle } from "../services/blogpost";
import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: string;
}

export default function ReadBlogPage() {
  let { title } = useParams<{ title: string }>();
  const [blogPost, setBlogPost] = useState<any>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState<string>("");

  const fetchBlog = useCallback(async () => {
    if (title) {
      const res = await getBlogpostByTitle(title);
      if (res.status === 200) {
        setBlogPost(res.data.blogpost);
      }
    }
  }, [title]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const handleCommentSubmit = (event: React.FormEvent) => {
    let s = sessionStorage.getItem("user");
    let userObj;
    if (s) {
      userObj = JSON.parse(s);
    }
    event.preventDefault();
    const newComment: Comment = {
      id: comments.length + 1, // Simulating a unique ID.
      username: userObj.username, // This should ideally be the logged-in user's username.
      content: commentInput,
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setCommentInput(""); // Clear the input after submission.
  };

  if (!blogPost) return <h1>404 - NOT FOUND</h1>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <img
          className="w-full h-52 object-cover rounded-md"
          src="https://www.health.com/thmb/hN-NGS0dEiJc1O1njUcBtH85ggM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/psychiatrist-GettyImages-1433472018-d9221f4efcd34a07bf5e42945696cea6.jpg"
          alt="Blog Header"
        />
        <h1 className="text-5xl font-bold mb-4">{blogPost.blog_title}</h1>
        <p className="text-gray-600 text-lg mb-6">{blogPost.content}</p>
        <div className="flex items-center mt-6">
          <img
            className="w-10 h-10 rounded-full"
            src="https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
            alt="Therapist"
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
        {/* Comments Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Comments</h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className="w-full p-2 text-sm text-gray-700 border rounded-lg focus:outline-none"
              rows={3}
              placeholder="Write a comment..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2  bg-[#ccccff] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Post Comment
            </button>
          </form>
          {comments.map((comment) => (
            // <div key={comment.id} className="bg-gray-100 rounded-lg p-3 mb-2">
            //   <p className="text-sm font-semibold">{comment.username}</p>
            //   <p className="text-sm">{comment.content}</p>
            // </div>
            <div key={comment.id} className="bg-gray-100 rounded-lg p-3 mb-2">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{comment.username}</p>
                <p className="text-sm text-gray-500">{comment.timestamp}</p>
              </div>
              <p className="text-sm">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
