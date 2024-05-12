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
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div>
              <Link
                to="/"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>Know YourSelf</span>
              </Link>
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8">
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
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <UserIcon className="h-6 w-6 text-primary" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex gap-1 font-bold text-gray-700 items-center "
              >
                <UserIcon className="h-6 w-6 text-primary" />
              </Link>
            )}
          </div>
          {/* secondary */}
          <div className="flex gap-6 items-center">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <MoonIcon className="h-6 w-6" />
                <SunIcon className="h-6 w-6" />
              </div>
              <div>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  button
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
