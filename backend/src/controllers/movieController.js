import * as MovieModel from "../models/movieModel.js";

export async function getMovies(req, res) {
  const movies = await MovieModel.getAll(req.query);
  return res.status(200).json(movies);
}
export async function getMovieById(req, res) {
  const movie = await MovieModel.getById(req.params.id);

  if (!movie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  return res.status(200).json(movie);
}

export async function addMovie(req, res) {
  const newMovie = await MovieModel.add(req.body);
  return res.status(201).json(newMovie);
}

export async function updateMovie(req, res) {
  const updatedMovie = await MovieModel.update(req.params.id, req.body);

  if (!updatedMovie) {
    return res.status(404).json({ error: "Movie not found" });
  }

  return res.status(200).json(updatedMovie);
}

export async function deleteMovie(req, res) {
  const deleted = await MovieModel.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: "Movie not found" });
  }

  return res.status(200).json({ message: "Movie deleted successfully" });
}