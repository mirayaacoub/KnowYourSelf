import { func } from "prop-types";
import Requests from "./http-common.ts";

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
    await Requests.post(`/auth/authenticate`, {
      user: {
        email,
        password,
      },
    });
    alert("LOGGED IN");
  } catch (e) {
    console.error("FFS");
  }
}
