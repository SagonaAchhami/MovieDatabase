import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import AddMovie from "./Components/AddMovie";
import MovieCard from "./Components/MovieCard";
import { getMovies, addMovie as addMovieAPI } from "./api/movieApi.js";

export default function App() {
  const [movies, setMovies] = useState([]);

  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [totalMovies, setTotalMovies] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        setErrors((prev) => [...prev, error]);
      } finally {
        setIsLoading(false);
      }
    }

    loadMovies();
  }, []);

  const addMovie = async (movie) => {
    try {
      const response = await addMovieAPI(movie);

      setMovies((prev) => [...prev, response.data]);
    } catch (error) {
      setErrors((prev) => [...prev, error]);
    }
  };

  const toggleWatchlist = (movie) => {
    const exists = watchlist.find((m) => m.title === movie.title);

    setWatchlist(
      exists
        ? watchlist.filter((m) => m.title !== movie.title)
        : [...watchlist, movie]
    );
  };

  useEffect(() => {
    setTotalMovies(movies.length);

    if (movies.length > 0) {
      const avg =
        movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;

      setAvgRating(avg.toFixed(1));
    } else {
      setAvgRating(0);
    }
  }, [movies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return <p className="text-center mt-10">Loading movies...</p>;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#DCCCAC]">
        <Navbar />

        <div className="text-center py-4 font-semibold">
          Total Movies: {totalMovies} | Avg Rating: {avgRating}
        </div>

        {errors.length > 0 && (
          <p className="text-center text-red-600">
            Failed to load movies
          </p>
        )}

        <Routes>

          {/* BROWSE */}
          <Route
            path="/"
            element={
              <MovieGrid
                movies={filteredMovies}
                onSelectMovie={setSelectedMovie}
                selectedMovie={selectedMovie}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                search={search}
                setSearch={setSearch}
              />
            }
          />

          {/* ADD */}
          <Route
            path="/add"
            element={
              <AddMovie onAddMovie={addMovie} />
            }
          />

          {/* WATCHLIST */}
          <Route
            path="/watchlist"
            element={
              <div className="max-w-7xl mx-auto py-8 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Watchlist
                </h2>

                {watchlist.length === 0 ? (
                  <p className="text-center">
                    No movies in watchlist
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {watchlist.map((movie) => (
                      <MovieCard
                        key={movie._id || movie.title}
                        movie={movie}
                        onSelectMovie={setSelectedMovie}
                        selectedMovie={selectedMovie}
                        watchlist={watchlist}
                        toggleWatchlist={toggleWatchlist}
                      />
                    ))}
                  </div>
                )}
              </div>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}