import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export function getMovies() {
  return api.get("/movies");
}

export function addMovie(movie) {
  return api.post("/movies", movie);
}

export function updateMovie(id, movie) {
  return api.put(`/movies/${id}`, movie);
}

export function deleteMovie(id) {
  return api.delete(`/movies/${id}`);
}
export function register(user) {
  return api.post("/auth/register", user);
}

export function login(user) {
  return api.post("/auth/login", user);
}
export function postReview(movieId, review) {
  return api.post(`/movies/${movieId}/reviews`, review);
}
export function getWatchlist() {
  return api.get("/movies/watchlist/all");
}

export function addToWatchlist(movieId) {
  return api.post(`/movies/watchlist/${movieId}`);
}

export function removeFromWatchlist(movieId) {
  return api.delete(`/movies/watchlist/${movieId}`);
}