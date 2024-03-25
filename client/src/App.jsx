import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignUpPage/SignupPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={LoginPage} />
          <Route path={"/signup"} Component={SignupPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
