import axios from "axios";

const APIURL =
  import.meta.env.VITE_APIURL || "https://moviedatabase-g0i8.onrender.com";

const api = axios.create({
  baseURL: `${APIURL}/ai`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export function getMovieRecommendations(prompt) {
  return api.post("/recommend", { prompt });
}
