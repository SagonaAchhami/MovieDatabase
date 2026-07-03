import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import AddMovie from "./Components/AddMovie";

export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Harry Potter",
      genre: "Fantasy",
      year: 2001,
      rating: 7.6,
    },
    {
      title: "Toy Story 5",
      genre: "Animation",
      year: 2026,
      rating: 7.2,
    },
    {
      title: "Project Hail Mary",
      genre: "Sci-Fi",
      year: 2026,
      rating: 7.7,
    },
    {
      title: "Elio",
      genre: "Animation",
      year: 2025,
      rating: 9.0,
    },
    {
      title: "The Last Whale Singer",
      genre: "Animation",
      year: 2025,
      rating: 6.0,
    },
  ]);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#DCCCAC]">
        <Navbar />

        <Routes>
          <Route path="/" element={<MovieGrid movies={movies} />} />
          <Route path="/add" element={<AddMovie onAddMovie={addMovie} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}