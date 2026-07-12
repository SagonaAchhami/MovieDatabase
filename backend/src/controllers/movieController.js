import * as MovieModel from "../models/movieModel.js";

export function getMovies(req, res) {
  return res.status(200).json(MovieModel.getAll());
}

export function getMovieById(req, res) {
  const movie = MovieModel.getById(req.params.id);

  if (!movie) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  return res.status(200).json(movie);
}

export function addMovie(req, res) {
  const movies = MovieModel.getAll();

  const newMovie = {
    id: movies.length ? movies[movies.length - 1].id + 1 : 1,
    ...req.body,
  };

  MovieModel.add(newMovie);

  return res.status(201).json(newMovie);
}

export function updateMovie(req, res) {
  const updatedMovie = MovieModel.update(req.params.id, req.body);

  if (!updatedMovie) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  return res.status(200).json(updatedMovie);
}

export function deleteMovie(req, res) {
  const deleted = MovieModel.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  return res.status(200).json({
    message: "Movie deleted successfully",
  });
}