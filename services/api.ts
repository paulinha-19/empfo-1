import axios from "axios";
import { API_CONNECT } from "@env";

export const api = axios.create({
  baseURL: API_CONNECT,
});
