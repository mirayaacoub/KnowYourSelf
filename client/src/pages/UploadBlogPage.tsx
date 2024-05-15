// import { useState } from "react";
// import { createBlogPosts } from "../services/blogpost";
// import Navbar from "../components/NavBar";
// import FooterComponent from "../components/Footer";
// import { DialogBox } from "../components/dialogbox"; // Import the DialogBox component

// export default function CreateBlogPage() {
//   const [user_id, setUserId] = useState<number>(3); // Replace with actual user_id logic
//   const [blog_title, setBlogTitle] = useState<string>("");
//   const [content, setContent] = useState<string>("");
//   const [dialogMessage, setDialogMessage] = useState<string | null>(null);

//   const handleCloseDialog = () => {
//     setDialogMessage(null);
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     const response = await createBlogPosts(user_id, blog_title, content);

//     if (response) {
//       setDialogMessage("Blogpost created successfully");
//       // Optionally clear the form
//       setBlogTitle("");
//       setContent("");
//     } else {
//       setDialogMessage("Blogpost created successfully.");
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <div className="flex items-center justify-between w-full bg-[#ccccff] px-0 py-6 ">
//           <h1 className="text-3xl font-bold mb-4">Create New Blog Post</h1>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="blog_title"
//             >
//               Blog Title
//             </label>
//             <input
//               id="blog_title"
//               type="text"
//               value={blog_title}
//               onChange={(e) => setBlogTitle(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="content"
//             >
//               Content
//             </label>
//             <textarea
//               id="content"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               rows={10}
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Create Blog Post
//             </button>
//           </div>
//         </form>

//         {dialogMessage && (
//           <DialogBox message={dialogMessage} onClose={handleCloseDialog} />
//         )}
//         <FooterComponent />
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import { createBlogPosts } from "../services/blogpost";
import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { DialogBox } from "../components/dialogbox";

export default function CreateBlogPage() {
  const [user_id, setUserId] = useState<number>(78);
  const [blog_title, setBlogTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleCloseDialog = () => {
    setDialogMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await createBlogPosts(user_id, blog_title, content);

    if (response) {
      setDialogMessage("Blogpost uploaded successfully");
      setBlogTitle("");
      setContent("");
      setImage(null);
      setImagePreview(null);
    } else {
      setDialogMessage("Blogpost uploaded successfully.");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center w-full bg-[#ccccff] py-6 ">
          <h1 className="text-3xl font-bold mb-4">Create New Blog Post</h1>
        </div>
        <form onSubmit={handleSubmit} className="px-4">
          <div className="mb-4">
            <label
              className="block mt-4 text-gray-700 text-lg font-bold mb-2"
              htmlFor="blog_title"
            >
              Blog Title
            </label>
            <input
              id="blog_title"
              type="text"
              value={blog_title}
              onChange={(e) => setBlogTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={10}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="upload-image"
            >
              Upload Image
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="mb-2 text-sm py-3 text-gray-700">
                  Image Preview:
                </p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs w-full h-auto rounded-md py-3 shadow-md"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#ccccff] hover:bg-black text-white font-bold py-2 mb-6 mt-4 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload Blog Post
          </button>
        </form>
        {dialogMessage && (
          <DialogBox message={dialogMessage} onClose={handleCloseDialog} />
        )}
        <FooterComponent />
      </div>
    </>
  );
}
