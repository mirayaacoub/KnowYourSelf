import { func } from "prop-types";
import Requests from "./http-common.ts";
import { useNavigate } from "react-router-dom";

export async function createUser(
  username: string,
  email: string,
  password: string,
  role: "therapist" | "patient",
) {
  await Requests.post(`/register`, {
    user: {
      username,
      email,
      password,
      role,
    },
  });
}

export async function authenticateUser(email: string, password: string) {
  try {
    const data = {
      user: {
        email,
        password,
      },
    };
    const res = await Requests.post(`/auth/authenticate`, data);

    if (res.status >= 400) {
      // Check if the response is not OK (status code >= 400)
      if (res.status === 404) {
        console.log("This user is not found in the DB");
      } else {
        console.error("Unexpected error:", res.status, res.statusText);
      }
      return; // Exit function after handling the error
    }

    // If response is OK, proceed with the success scenario
    if (res.status === 200) {
      console.log(res.data);
      // save needed data from the result
      sessionStorage.setItem("token", res.data.token);
      var jsonString = JSON.stringify(res.data.user);
      sessionStorage.setItem("user", jsonString);
      console.log(sessionStorage.getItem("token"));
      let s = sessionStorage.getItem("user");
      if (s) console.log(JSON.parse(s));

      // navigate to home page
    }
    alert("LOGGED IN");
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}
