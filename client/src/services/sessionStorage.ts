import Requests from "./http-common";
export const profileService = async () => {
  let str = `{"email":"${sessionStorage.getItem("email")}"}`;
  return Requests.post("/profilePage", JSON.parse(str));
};
