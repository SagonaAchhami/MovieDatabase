import { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

export default function MovieGrid() {
  const [showForm, setShowForm] = useState(false);

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

  // ✅ callback function (child → parent)
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
    setShowForm(false); // optional: close form after submit
  };

  return (
    <>
      {/* Add Movie Button */}
      <div className="flex justify-center my-6">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-800 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Add New Movie
        </button>
      </div>

      {/* Form */}
      {showForm && <AddMovie onAddMovie={addMovie} />}

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
          />
        ))}
      </div>
    </>
  );
}
   //usestate()-UI ma change vako variable ma rakhne
   //callback function is used child bata parent ma call garne