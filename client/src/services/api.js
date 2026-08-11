import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Port baad me verify karenge
  withCredentials: true,
});

export default api;