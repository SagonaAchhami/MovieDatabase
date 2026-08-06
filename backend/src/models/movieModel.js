import movie from "../../data/movie.js";
import User from "../../data/user.js";
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

  return await movie.find(filter);
}

export async function getById(id) {
  const movieId = new ObjectId(id);

  return await movie.findById(movieId);
}

export async function add(newMovie) {
  return await movie.create(newMovie);
}

export async function update(id, updatedMovie) {
  const updateId = new ObjectId(id);

  return await movie.findByIdAndUpdate(updateId, updatedMovie, {
    new: true,
    runValidators: true,
  });
}

export async function remove(id) {
  const deleteId = new ObjectId(id);

  return await movie.findByIdAndDelete(deleteId);
}


export async function addReview(movieId, userId, review) {
  const movieDoc = await movie.findById(movieId);

  if (!movieDoc) return null;

  movieDoc.reviews.push({
    user: userId,
    rating: review.rating,
    comment: review.comment,
  });

  const total = movieDoc.reviews.reduce(
    (sum, r) => sum + r.rating,
    0
  );

  movieDoc.avgRating = total / movieDoc.reviews.length;

  movieDoc.rating = movieDoc.avgRating;

  await movieDoc.save();

  return movieDoc;
}

export async function getWatchlist(userId) {
  return await User.findById(userId).populate("watchlist");
}

export async function addToWatchlist(userId, movieId) {
  const user = await User.findById(userId);

  if (!user) return null;

  user.watchlist ??= [];

  if (!user.watchlist.includes(movieId)) {
    user.watchlist.push(movieId);
    await user.save();
  }

  return await user.populate("watchlist");
}

export async function removeFromWatchlist(userId, movieId) {
  const user = await User.findById(userId);

  if (!user) return null;

  user.watchlist = (user.watchlist ?? []).filter(
    (id) => id.toString() !== movieId
  );

  await user.save();

  return await user.populate("watchlist");
}
