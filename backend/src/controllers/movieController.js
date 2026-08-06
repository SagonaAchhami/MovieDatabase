import * as MovieModel from "../models/movieModel.js";

export async function getMovies(req, res) {
  try {
    const movies = await MovieModel.getAll(req.query);
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getMovieById(req, res) {
  try {
    const movie = await MovieModel.getById(req.params.id);

    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function addMovie(req, res) {
  try {
    const newMovie = await MovieModel.add(req.body);
    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateMovie(req, res) {
  try {
    const updatedMovie = await MovieModel.update(req.params.id, req.body);

    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json(updatedMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteMovie(req, res) {
  try {
    const deleted = await MovieModel.remove(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function postReview(req, res) {
  try {
    const { rating, comment } = req.body;

    const updatedMovie = await MovieModel.addReview(
      req.params.id,
      req.user._id,
      {
        rating,
        comment,
      }
    );

    if (!updatedMovie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    return res.status(201).json(updatedMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getWatchlist(req, res) {
  try {
    const user = await MovieModel.getWatchlist(req.user._id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(user.watchlist);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function addWatchlist(req, res) {
  try {
    const user = await MovieModel.addToWatchlist(
      req.user._id,
      req.params.id
    );

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(user.watchlist);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

export async function removeWatchlist(req, res) {
  try {
    console.log("Decoded user:", req.user);
    console.log("req.user._id =", req.user._id);
    console.log("Movie ID:", req.params.id);

    const user = await MovieModel.removeFromWatchlist(
      req.user._id,
      req.params.id
    );

    console.log("Mongo user =", user);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    return res.status(200).json(user.watchlist);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
}