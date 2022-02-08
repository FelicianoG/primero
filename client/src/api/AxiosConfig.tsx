import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4500/",

  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
