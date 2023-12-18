import axios from "axios";

export const api = axios.create({
  baseURL: "https://empfo-api-918a195e0fbf.herokuapp.com/",
});
