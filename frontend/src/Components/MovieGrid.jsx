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
}) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
   

      {/* SEARCH BAR */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border rounded-lg"
        />
      </div>

      {/* ADD MOVIE BUTTON */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate("/add")}
          className="bg-green-800 text-white px-6 py-3 rounded-lg"
        >
          Add Movie
        </button>
      </div>

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