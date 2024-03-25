import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../Services/Authentication";
//import "..../App.css";
import httpCommon from "../../http-common";
const LoginForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    let result = await LoginService(email, password);
    if (result.status === 200) {
      httpCommon.defaults.headers[
        "authorization"
      ] = `Bearer ${result.data.token}`;
      sessionStorage.setItem("email", email);
      console.log("setting sessionStorage" + sessionStorage.getItem("email"));
      navigate("/");
    }
  }

  return (
    <>
      <form>
        <div className="App">
          <div className="BoxShadow">
            <header className="App-header">
              <h2>Login</h2>
            </header>
            <div style={{ display: "flex", gap: 50 }}>
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
            <button onClick={login}>Login</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
