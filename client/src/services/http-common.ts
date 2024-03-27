import axios from "axios";
import { serverConfig } from "./server.config.ts";

const Requests = axios.create({
  baseURL: serverConfig.url,
});

export default Requests;
