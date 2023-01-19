import axios from "axios";

const api = axios.create({
  baseURL: "https://k55eka.deta.dev/default/",
});

export default api;
