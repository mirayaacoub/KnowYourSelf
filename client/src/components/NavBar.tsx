import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="app">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-12">
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
              <div className="hidden lg:flex gap-8 ">
                <Link to="/" className="">
                  Home
                </Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/findTherapist">Find a Therapist</Link>
              </div>
              {sessionStorage.getItem("token") ? (
                <Link
                  to="/profilePage"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <UserIcon className="h-6 w-6 text-primary" />
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <UserIcon className="h-6 w-6 text-primary" />
                </Link>
              )}
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
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
    </div>
  );
}

export default Navbar;
