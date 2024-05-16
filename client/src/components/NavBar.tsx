import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  UserIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <nav className="flex justify-between items-center px-10 py-6 gap-20">
      {/* Primary menu and logo */}
      {/* logo */}
      <div>
        <Link
          to="/"
          className="flex gap-10 font-bold text-gray-700 items-center "
        >
          <PaperAirplaneIcon className="h-6 w-6 text-primary" />
          <span>Know YourSelf</span>
        </Link>
      </div>
      {/* primary */}
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/about-us" className="hover:underline">
        About Us
      </Link>
      <Link to="/blogs" className="hover:underline">
        Blogs
      </Link>
      <Link to="/find-therapist" className="hover:underline">
        Find a Therapist
      </Link>
      {sessionStorage.getItem("token") ? (
        <div className="flex items-center gap-6">
          <Link
            to="/inbox"
            className="flex gap-10 font-bold text-gray-700 items-center "
          >
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6 text-primary" />
          </Link>
          <Link
            to="/profile-page"
            className="flex gap-10 font-bold text-gray-700 items-center "
          >
            <UserIcon className="h-6 w-6 text-primary" />
          </Link>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex gap-10 font-bold text-gray-700 items-center "
        >
          <UserIcon className="h-6 w-6 text-primary" />
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
