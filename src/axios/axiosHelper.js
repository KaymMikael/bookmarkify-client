import axios from "axios";

const axiosHelper = axios.create({
  baseURL: "http://localhost:3000/v1/api",
});

export default axiosHelper;
