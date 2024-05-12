import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    // <nav className="bg-white shadow-lg ">
    <div className="container mx-auto ml-20">
      <div className="flex justify-between items-center px-0 py-6 gap-20">
        {/* Primary menu and logo */}
        <div className="flex items-center gap-24">
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
          <div className="hidden lg:flex gap-24">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/find-therapist">Find a Therapist</Link>
          </div>
          {sessionStorage.getItem("token") ? (
            <Link
              to="/profile-page"
              className="flex gap-10 font-bold text-gray-700 items-center "
            >
              <UserIcon className="h-6 w-6 text-primary" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex gap-10 font-bold text-gray-700 items-center "
            >
              <UserIcon className="h-6 w-6 text-primary" />
            </Link>
          )}
        </div>
      </div>
    </div>
    // </nav>
  );
}

export default Navbar;
