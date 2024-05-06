import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AvatarSizes } from "../components/avatar";
import { Sidebar } from "../components/sideBar";

export function ProfilePage() {
  const [username, setUsername] = useState("");
  let s = sessionStorage.getItem("user");
  let role;
  if (s) {
    let userObj = JSON.parse(s);
    role = userObj.role;
    console.log("user email isss " + username);
  }
  const [isTherapist, toggleIsTherapist] = useState(role == "therapist");

  // if (role == "therapist") {
  //   toggleIsTherapist(true);
  // }

  const [email, setEmail] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [experience, setExperience] = useState("");
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-screen items-center justify-center mt-8">
        <Sidebar></Sidebar>
        <div className="flex-1 flex-col justify-center items-center  mt-[-10rem] ml-20">
          <AvatarSizes></AvatarSizes>
          <h1 className="my-2">Personal Information</h1>
          <form
            className="w-full max-w-md"
            onSubmit={async (event) => {
              event.preventDefault();
            }}
          >
            <label className="block mb-2">Username</label>
            <input
              required
              // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
              autoComplete="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />

            <label className="block mb-2">Email</label>
            <input
              required
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
              className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            />

            {isTherapist ? (
              <div>
                <label className="block mb-2">Specialty</label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                  onChange={(e) => setSpecialty(e.target.value)}
                />
                <label className="block mb-2">Years of Experience</label>
                <input
                  type="text"
                  // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <label className="block mb-2">Diagnosis History</label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                  // className="block w-full border border-white rounded-md px-4 py-2 mb-4 bg-black text-white"
                  onChange={(e) => setDiagnosis(e.target.value)}
                />
              </div>
            )}

            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
            <br />
            <br />
          </form>
        </div>
      </div>
    </>
  );
}
