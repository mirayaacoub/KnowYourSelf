import Navbar from "../components/NavBar";
import FooterComponent from "../components/Footer";
import { Link } from "react-router-dom";

export function HomePage() {
  // if (sessionStorage.getItem("token")) return <h1>HOMEPAGE</h1>;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex items-center justify-between w-full bg-[#C2C3D2] px-0 py-6 ">
          <img
            src="brainKnit.png"
            className="w-60 ml-6 h-70"
            alt="Therapysesh"
          />
          <div className="flex flex-col items-center mr-10">
            <p className="home-heading text-black font-ConcertOne font-bold text-5xl ">
              Know YourSelf
            </p>
            <p className="text-black text-sm mb-6 text-center mt-4 ">
              Your mental health comes first! Find a suitable licensed therapist
              from now the comfort your own home. Choose among many trusted and
              experienced therapists.
            </p>
            <Link to="/find-therapist">
              <button className=" bg-transparent border border-black text-black font-bold rounded-full px-4 py-3 hover:bg-black hover:text-white focus:outline-none">
                Find a Therapist
              </button>
            </Link>
          </div>
          <img
            src="therapysesh.png"
            className="w-60 h-70 mr-6"
            alt="Therapysesh"
          />

          {/* Image aligned to the right */}
        </div>

        {/* New div */}
        <div className="flex justify-between items-center bg-white py-7 pl-20">
          <div className="bg-[#C2C3D2] mt-10 ml-24 rounded-full w-50 h-48 flex items-center justify-center">
            <img src="notebook.png" className="w-30 h-30 p-5" alt="Notebook" />
          </div>

          <div className="flex flex-col items-center mt-10 ml-0 mr-10">
            <p className=" text-black font-ConcertOne font-bold text-3xl ">
              Not here to book?
            </p>
            <p className="text-black text-sm ml-10 mr-10 mb-6 text-center mt-4 ">
              Got spare time and don't know what to do with it? Read some of the
              most interesting blogs written by our therapists, all at the tip
              of your fingertips!
            </p>
            <Link to="/blogs">
              <button className=" bg-transparent border border-black text-black font-bold rounded-full px-4 py-3 hover:bg-black hover:text-white focus:outline-none">
                Read a Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-20">
        <FooterComponent />
      </div>
    </>
  );
}
