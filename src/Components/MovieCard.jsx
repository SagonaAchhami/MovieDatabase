import Poster from "./Poster";
import MovieTitle from "./MovieTitle";
import Genre from "./Genre";
import Year from "./Year";
import Rating from "./Rating";
import Button from "./Button";
function MovieCard({ title, genre, year, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Poster />

      <div className="p-4">
        <Rating rating={rating} />
        <MovieTitle title={title} />
        <Genre genre={genre} />
        <Year year={year} />

          
      </div>
    </div>
  );
}

export default MovieCard;