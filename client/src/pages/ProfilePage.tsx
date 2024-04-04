import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
export function ProfilePage() {
  let s = sessionStorage.getItem("user");
  let username;
  if (s) {
    let userObj = JSON.parse(s);
    username = userObj.username;
    console.log("user email isss " + username);
  }

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <>
      {/* (sessionStorage.getItem("token")) return */}
      <h1>hello {username}</h1>
      <br />
      <div className="pb-8">
        <Link to="/">
          <Button variant="text" onClick={handleLogout}>
            Logout
          </Button>
        </Link>
      </div>
    </>
  );
}
