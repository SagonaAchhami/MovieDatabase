import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import AddMovie from "./Components/AddMovie";

export default function App() {
  const [movies, setMovies] = useState([
    { title: "Harry Potter", genre: "Fantasy", year: 2001, rating: 7.6, director: "Chris Columbus", synopsis: "Wizard discovers Hogwarts magic", cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"] },
    { title: "Toy Story 5", genre: "Animation", year: 2026, rating: 7.2, director: "Andrew Stanton", synopsis: "Toys return new adventure", cast: ["Tom Hanks", "Tim Allen"] },
    { title: "Project Hail Mary", genre: "Sci-Fi", year: 2026, rating: 7.7, director: "Phil Lord", synopsis: "Astronaut saves Earth alone", cast: ["Ryan Gosling"] },
    { title: "Elio", genre: "Animation", year: 2025, rating: 9.0, director: "Adrian Molina", synopsis: "Boy becomes space ambassador", cast: ["Yonas Kibreab"] },
    { title: "The Last Whale Singer", genre: "Animation", year: 2025, rating: 6.0, director: "Reza Memari", synopsis: "Underwater friendship and music", cast: ["Actor 1", "Actor 2"] }
  ]);

  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // ADD MOVIE
  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  // WATCHLIST TOGGLE (using title instead of id)
  const toggleWatchlist = (movie) => {
    const exists = watchlist.find((m) => m.title === movie.title);

    if (exists) {
      setWatchlist((prev) =>
        prev.filter((m) => m.title !== movie.title)
      );
    } else {
      setWatchlist((prev) => [...prev, movie]);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#DCCCAC]">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <MovieGrid
                movies={movies}
                onSelectMovie={setSelectedMovie}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                selectedMovie={selectedMovie}
              />
            }
          />

          <Route path="/add" element={<AddMovie onAddMovie={addMovie} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
