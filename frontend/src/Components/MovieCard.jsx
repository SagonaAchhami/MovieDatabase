import { useState } from "react";
import Poster from "./Poster";
import MovieTitle from "./MovieTitle";
import Genre from "./Genre";
import Year from "./Year";
import Rating from "./Rating";
import { postReview } from "../api/movieApi";

export default function MovieCard({
  movie,
  onSelectMovie,
  selectedMovie,
  watchlist,
  toggleWatchlist,
  isLoggedIn,
}) {
  const isSelected = selectedMovie?.title === movie.title;
  const saved = watchlist.some((m) => m.title === movie.title);

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  async function submitReview(e) {
    e.preventDefault();

    try {
      await postReview(movie._id, {
        rating: Number(rating),
        comment,
      });

      alert("Review added!");

      setRating("");
      setComment("");
    } catch (err) {
      alert("Please login first.");
    }
  }

  return (
    <div
      onClick={() => onSelectMovie(movie)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <Poster poster={movie.poster} title={movie.title} />

      <div className="p-4">
        <Rating rating={movie.rating} />
        <MovieTitle title={movie.title} />
        <Genre genre={movie.genre} />
        <Year year={movie.year} />

        <button
          onClick={(e) => {
            e.stopPropagation();

            if (!isLoggedIn) {
              alert("Please login first to add movies to your watchlist.");
              return;
            }

            toggleWatchlist(movie);
          }}
          className="mt-3 bg-green-700 text-white px-4 py-2 rounded"
        >
          {saved ? "Remove Watchlist" : "Add Watchlist"}
        </button>
      </div>
    </div>
  );
}