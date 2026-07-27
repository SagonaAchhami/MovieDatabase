import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MovieCard from "./MovieCard";
import { postReview } from "../api/movieApi";

export default function MovieGrid({
  movies,
  onSelectMovie,
  selectedMovie,
  watchlist,
  toggleWatchlist,
  search,
  setSearch,
  totalMovies,
  avgRating,
}) {
  const navigate = useNavigate();
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  async function submitReview(e) {
    e.preventDefault();

    try {
      await postReview(selectedMovie._id, {
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
    <div className="max-w-7xl mx-auto py-8 px-6">

      {/* SEARCH | TOTAL MOVIES/AVG RATING | ADD MOVIE */}

      <div className="flex justify-between items-center mb-8">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-lg w-full max-w-xs"
        />

        <div className="font-semibold whitespace-nowrap px-4">
          Total Movies: {totalMovies} | Avg Rating: {avgRating}
        </div>

        <button
          onClick={() => navigate("/add")}
          className="bg-green-800 text-white px-6 py-3 rounded-lg whitespace-nowrap"
        >
          Add Movie
        </button>
      </div>

      {/* SELECTED MOVIE DETAILS */}

      {selectedMovie && (
        <div className="bg-white rounded-xl shadow-lg p-4 mb-8 flex gap-6">

          {/* POSTER */}

          <img
            src={selectedMovie.poster}
            alt={selectedMovie.title}
            className="w-56 h-80 object-contain rounded-lg"
          />

          {/* MOVIE INFORMATION */}

          <div className="flex-1">
            <h2 className="text-4xl font-bold text-green-800">
              {selectedMovie.title}
            </h2>

            <p><strong>Genre:</strong> {selectedMovie.genre}</p>
            <p><strong>Year:</strong> {selectedMovie.year}</p>
            <p><strong>Director:</strong> {selectedMovie.director}</p>
            <p><strong>Rating:</strong> ⭐ {selectedMovie.rating}</p>

            <p className="mt-4">
              <strong>Synopsis:</strong> {selectedMovie.synopsis}
            </p>

            <div className="mt-4">
              <strong>Cast:</strong>

              <ul className="list-disc ml-5">
                {selectedMovie.cast?.map((actor, i) => (
                  <li key={i}>{actor}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* REVIEW FORM AND REVIEW LIST */}

          <div className="w-80">

            {/* REVIEW FORM */}

            <form onSubmit={submitReview} className="space-y-2">
              <h3 className="font-bold">Add Review</h3>

              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <textarea
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <button className="bg-green-700 text-white px-4 py-2 rounded">
                Submit Review
              </button>
            </form>

            {/* REVIEW LIST */}

            {selectedMovie.reviews?.length > 0 && (
              <div className="mt-5">
                <h3 className="font-bold mb-2">Reviews</h3>

                {selectedMovie.reviews.map((review, index) => (
                  <div key={index} className="border rounded p-2 mb-2">
                    <p>⭐ {review.rating}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* FIXED HEIGHT GRID WRAPPER */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {movies.map((movie) => (
          <div key={movie.title} className="h-full">
            <MovieCard
              movie={movie}
              onSelectMovie={onSelectMovie}
              selectedMovie={selectedMovie}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
