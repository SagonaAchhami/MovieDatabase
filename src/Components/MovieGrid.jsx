import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <h2 className="text-3xl font-bold text-center text-[#546B41] mb-10">
        Featured Movies
      </h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate("/add")}
          className="bg-green-800 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Add Movie
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}