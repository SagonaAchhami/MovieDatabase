import MovieCard from "./MovieCard";

function MovieGrid() {
  const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Avatar",
      genre: "Adventure",
      year: 2009,
      rating: 7.9,
    },
    {
      title: "Titanic",
      genre: "Romance",
      year: 1997,
      rating: 7.8,
    },
    {
      title: "The Room",
      genre: "Drama",
      year: 2003,
      rating: 3.7,
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
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