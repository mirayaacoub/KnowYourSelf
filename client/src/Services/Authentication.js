import httpCommon from "../http-common";

export const LoginService = async (email, password) => {
  return httpCommon.post("/auth/login", { email, password });
};

export const SignupService = async (username, email, password) => {
  return httpCommon.post("/auth/signup", { username, email, password });
};
