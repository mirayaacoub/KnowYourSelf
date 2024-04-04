import { useState, useEffect } from "react";
import { profileService } from "../services/sessionStorage";
export function ProfilePage() {
  let s = sessionStorage.getItem("user");
  let username;
  if (s) {
    let userObj = JSON.parse(s);
    username = userObj.username;
    console.log("user email isss " + username);
  }

  return (
    <>
      {/* (sessionStorage.getItem("token")) return */}
      <h1>hello {username}</h1>
    </>
  );
}
