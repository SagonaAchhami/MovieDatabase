import axios from "axios";

const APIURL =
  import.meta.env.APIURL || "https://moviedatabase-g0i8.onrender.com";

const api = axios.create({
  baseURL: `${APIURL}/movies`,
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

export function getMovies() {
  return api.get("/");
}

export function addMovie(movie) {
  return api.post("/", movie);
}

export function updateMovie(id, movie) {
  return api.put(`/${id}`, movie);
}

export function deleteMovie(id) {
  return api.delete(`/${id}`);
}

export function register(user) {
  return api.post("/auth/register", user);
}

export function login(user) {
  return api.post("/auth/login", user);
}

export function postReview(movieId, review) {
  return api.post(`/${movieId}/reviews`, review);
}

export function getWatchlist() {
  return api.get("/watchlist/all");
}

export function addToWatchlist(movieId) {
  return api.post(`/watchlist/${movieId}`);
}

export function removeFromWatchlist(movieId) {
  return api.delete(`/watchlist/${movieId}`);
}