import Poster from "./Poster";
import MovieTitle from "./MovieTitle";
import Genre from "./Genre";
import Year from "./Year";
import Rating from "./Rating";

export default function MovieCard({
  movie,
  onSelectMovie,
  selectedMovie,
  watchlist,
  toggleWatchlist,
}) {
  const isSelected = selectedMovie?.title === movie.title;
  const saved = watchlist.some((m) => m.title === movie.title);

  return (
    <div
      onClick={() => onSelectMovie(movie)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <Poster />

      <div className="p-4">
        <Rating rating={movie.rating} />
        <MovieTitle title={movie.title} />
        <Genre genre={movie.genre} />
        <Year year={movie.year} />

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWatchlist(movie);
          }}
          className="mt-3 bg-green-700 text-white px-4 py-2 rounded"
        >
          {saved ? "Remove Watchlist" : "Add Watchlist"}
        </button>

        {isSelected && (
          <div className="mt-4 border-t pt-4 text-gray-700">
            <p>
              <strong>Director:</strong> {movie.director}
            </p>

            <p className="mt-2">{movie.synopsis}</p>

            <div className="mt-2">
              <strong>Cast:</strong>
              <ul className="list-disc ml-6">
                {movie.cast?.map((actor, i) => (
                  <li key={i}>{actor}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}