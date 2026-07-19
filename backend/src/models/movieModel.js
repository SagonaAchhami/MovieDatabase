import movie from "../../data/movie.js";
import { ObjectId } from "mongodb";

export async function getAll(query = {}) {
  const filter = {};

  if (query.genre) {
    filter.genre = query.genre;
  }

  if (query.search) {
    filter.title = {
      $regex: query.search,
      $options: "i",
    };
  }

  return movie.find(filter);
}

export async function getById(id) {
  const movieId = new ObjectId(id);
  return movie.findById(movieId);
}

export async function add(newMovie) {
  return movie.create(newMovie);
}

export async function update(id, updatedMovie) {
  const updateId = new ObjectId(id);

  return movie.findByIdAndUpdate(updateId, updatedMovie, {
    new: true,
    runValidators: true,
  });
}

export async function remove(id) {
  const deleteId = new ObjectId(id);
  return movie.findByIdAndDelete(deleteId);
}