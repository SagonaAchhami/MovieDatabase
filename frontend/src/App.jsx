import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import AddMovie from "./Components/AddMovie";
import MovieCard from "./Components/MovieCard";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "Harry Potter", genre: "Fantasy", year: 2001, rating: 7.6, director: "Chris Columbus", synopsis: "Wizard discovers Hogwarts magic", cast: ["Daniel Radcliffe"] },
    { title: "Toy Story 5", genre: "Animation", year: 2026, rating: 7.2, director: "Andrew Stanton", synopsis: "Toys return adventure", cast: ["Tom Hanks"] },
    { title: "Project Hail Mary", genre: "Sci-Fi", year: 2026, rating: 7.7, director: "Phil Lord", synopsis: "Astronaut saves Earth", cast: ["Ryan Gosling"] },
    { title: "Elio", genre: "Animation", year: 2025, rating: 9.0, director: "Adrian Molina", synopsis: "Boy becomes ambassador", cast: ["Yonas Kibreab"] },
  ]);

  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [search, setSearch] = useState("");
  const [totalMovies, setTotalMovies] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
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
    const avg = movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
    setAvgRating(avg.toFixed(1));
  }, [movies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#DCCCAC]">
        <Navbar />

        <div className="text-center py-4 font-semibold">
          Total Movies: {totalMovies} | Avg Rating: {avgRating}
        </div>

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
            element={<AddMovie onAddMovie={addMovie} />}
          />

          {/*  WATCHLIST */}
          <Route
            path="/watchlist"
            element={
              <div className="max-w-7xl mx-auto py-8 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Watchlist
                </h2>

                {watchlist.length === 0 ? (
                  <p className="text-center">No movies in watchlist</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {watchlist.map((movie) => (
                      <MovieCard
                        key={movie.title}
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