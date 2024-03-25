import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpCommon from "../../http-common";
import { SignupService } from "../../Services/Authentication";

const SignupPage = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  async function signup(e) {
    e.preventDefault();
    let result = await SignupService(username, email, password);
    console.log(result);
    if (result.status === 201) {
      httpCommon.defaults.headers[
        "authorization"
      ] = `Bearer ${result.data.token}`;
      console.log(result.data.token);
      navigate("/");
    }
  }

  return (
    <>
      <form onSubmit={signup}>
        <div className="App">
          <div className="BoxShadow">
            <header className="App-header">
              <h2>Signup</h2>
            </header>
            <div style={{ display: "flex", gap: 50 }}>
              <div>
                <label>Username:</label>
                <br />
                <input
                  className="form-control"
                  placeholder="username"
                  onChange={(e) => {
                    setUsername(e.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                />
              </div>
              <div>
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  placeholder="password"
                  required
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
            <br />
            <button>Signup</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default SignupPage;
