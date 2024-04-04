import { useState } from "react";
import { authenticateUser } from "../services/user";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//reactquery tanstack
export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState<number | null>(null);

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
            let result = await authenticateUser(email, password);
            if (result === 200) console.log("correct id");
            setLoginResult(result || null);
            // navigate("/");
          }}
          className="w-full max-w-md"
        >
          <label className="block">Email</label>
          <input
            id="email"
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
          {loginResult === 200 ? (
            <Link to={"/"}>
              <input
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                value={"Log in"}
              />
            </Link>
          ) : (
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              value={"Log in"}
            />
          )}
        </form>
      </div>
    </div>
  );
}
