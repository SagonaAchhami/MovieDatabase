import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
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