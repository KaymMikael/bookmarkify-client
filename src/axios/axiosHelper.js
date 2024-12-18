import axios from "axios";

const axiosHelper = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default axiosHelper;
