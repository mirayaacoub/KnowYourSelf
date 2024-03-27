import { useState } from "react";
import { authenticateUser } from "../services/user";
//reactquery tanstack
export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('bg.png')` }}
      ></div>
      <div className="flex-1 flex justify-center items-center">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await authenticateUser(email, password);
          }}
          className="w-full max-w-md"
        >
          <label className="block">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          ></input>
          <label className="block">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          ></input>
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            value={"Log in"}
          />
        </form>
      </div>
    </div>
  );
}
