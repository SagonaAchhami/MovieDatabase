import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

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
  isLoggedIn,
}) {
  const navigate = useNavigate();

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
              isLoggedIn={isLoggedIn}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
