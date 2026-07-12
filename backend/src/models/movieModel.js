import movies from "../../data/movies.js";

export function getAll() {
  return movies;
}

export function getById(id) {
  return movies.find(movie => movie.id == id);
}

export function add(movie) {
  movies.push(movie);
  return movie;
}

export function update(id, updatedMovie) {
  const index = movies.findIndex(movie => movie.id == id);

  if (index === -1) {
    return null;
  }

  movies[index] = {
    ...movies[index],
    ...updatedMovie,
    id: Number(id), // keep original id
  };

  return movies[index];
}

export function remove(id) {
  const index = movies.findIndex(movie => movie.id == id);

  if (index === -1) {
    return false;
  }

  movies.splice(index, 1);

  return true;
}