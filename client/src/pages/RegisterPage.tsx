import { useState } from "react";
import { createUser } from "../services/user.ts";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [isTherapist, toggleIsTherapist] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [experience, setExperience] = useState("");
  const [speciality, setSpeciality] = useState("");

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('bg.png')` }}
      ></div>
      <div className="flex-1 flex justify-center items-center">
        <form
          className="w-full max-w-md"
          onSubmit={async (event) => {
            event.preventDefault();
            await createUser(
              username,
              email,
              password,
              isTherapist ? "therapist" : "patient",
            );
          }}
        >
          <label className="block">Username</label>
          <input
            required
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <label className="block">Email</label>
          <input
            required
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <label className="block">Password</label>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />

          <div className="mb-4">
            <label className="block">Role</label>
            <div className="flex">
              <input
                type="radio"
                name="role"
                onChange={() => toggleIsTherapist(false)}
                required
                defaultChecked={true}
                className="mr-2"
              />
              <label>Patient</label>
              <input
                type="radio"
                name="role"
                onChange={() => toggleIsTherapist(true)}
                required
                className="ml-4 mr-2"
              />
              <label>Therapist</label>
            </div>
          </div>

          {isTherapist ? (
            <div>
              <label className="block">Specialty</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                onChange={(e) => setSpeciality(e.target.value)}
              />
              <label className="block">Years of Experience</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <label className="block">Diagnosis History</label>
              <input
                type="text"
                className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </div>
          )}

          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            value="Register"
          />
        </form>
      </div>
      <Link to={"/login"} className="absolute bottom-4 left-4">
        Already have an account? Login.
      </Link>
    </div>
  );
}
