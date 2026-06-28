import Poster from "./Poster";
import MovieTitle from "./MovieTitle";
import Genre from "./Genre";
import Year from "./Year";
import Rating from "./Rating";

function MovieCard({ title, genre, year, rating }) {
  return (
    <div className="bg-[#DCCCAC] rounded-xl shadow-lg p-5 hover:scale-105 transition">
      <Poster />

      <div className="mt-4">
        <MovieTitle title={title} />
        <Genre genre={genre} />
        <Year year={year} />

        <div className="mt-3">
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;