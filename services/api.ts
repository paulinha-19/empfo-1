import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-empfo-6dceb9b000d7.herokuapp.com/",
});
