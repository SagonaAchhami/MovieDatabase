import axios from "axios";

const APIURL =
  import.meta.env.VITE_APIURL || "https://moviedatabase-g0i8.onrender.com";

const api = axios.create({
  baseURL: `${APIURL}/auth`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export function loginUser(userData) {
  return api.post("/login", userData);
}

export function registerUser(userData) {
  return api.post("/register", userData);
}