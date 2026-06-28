import MovieCard from "./MovieCard";

function MovieGrid() {
  const movies = [
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
  rating: 9.0
},
{
  title: "The Last Whale Singer",
  genre: "Animation",
  year: 2025,
  rating: 6.0,
},
  ];

  return (
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
  );
}

export default MovieGrid;