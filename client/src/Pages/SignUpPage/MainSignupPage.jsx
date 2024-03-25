import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleUserTypeSelect = (selectedUserType) => {
    setUserType(selectedUserType);
    navigate(`/signup/${selectedUserType}`);
  };

  return (
    <>
      <div className="App">
        <div className="BoxShadow">
          <header className="App-header">
            <h2>Signup</h2>
          </header>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <button onClick={() => handleUserTypeSelect("patient")}>
              Signup as a Patient
            </button>
            <button onClick={() => handleUserTypeSelect("therapist")}>
              Signup as a Therapist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
