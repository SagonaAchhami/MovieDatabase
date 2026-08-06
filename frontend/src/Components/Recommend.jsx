import { useState } from "react";
import Poster from "./Poster";
import MovieTitle from "./MovieTitle";
import Genre from "./Genre";
import Year from "./Year";
import Rating from "./Rating";
import { getMovieRecommendations } from "../api/aiApi";
import { buildRecommendationPrompt, parseRecommendations } from "../utils/ai";

function Spinner() {
  return (
    <div className="flex flex-col items-center gap-3 py-12">
      <div className="h-10 w-10 rounded-full border-4 border-[#0B542D] border-t-transparent animate-spin" />
      <p className="font-semibold text-[#546B41]">
        AI is curating your picks...
      </p>
    </div>
  );
}

export default function Recommend({ movies, watchlist }) {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleRecommend() {
    setIsLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const prompt = buildRecommendationPrompt(watchlist, movies);
      const response = await getMovieRecommendations(prompt);
      const parsed = parseRecommendations(response.data.data, movies);

      setRecommendations(parsed);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-[#0B542D]">
            AI Movie Recommendations
          </h2>
          <p className="text-[#546B41] mt-1">
            {watchlist.length > 0
              ? `Based on your ${watchlist.length} watchlisted movie(s)`
              : "Based on our full catalog"}
          </p>
        </div>

        <button
          onClick={handleRecommend}
          disabled={isLoading}
          className="bg-[#0B542D] hover:bg-[#0d6b3a] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
        >
          {isLoading ? "Finding matches..." : "✨ Recommend Me Something"}
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700">
          <p className="font-semibold">{error}</p>
          <button
            onClick={handleRecommend}
            className="mt-2 text-sm underline font-semibold"
          >
            Try again
          </button>
        </div>
      )}

      {isLoading && <Spinner />}

      {!isLoading && !error && recommendations.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-[#0B542D] mb-4">
            Top Picks For You
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={rec.title}
                className="rounded-xl overflow-hidden border border-[#99AD7A] bg-[#F5F0E4] flex flex-col"
              >
                {rec.movie ? (
                  <Poster poster={rec.movie.poster} title={rec.movie.title} />
                ) : (
                  <div className="bg-[#99AD7A] h-64 flex items-center justify-center text-5xl">
                    🎬
                  </div>
                )}

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <MovieTitle title={rec.title} />
                    <span className="text-sm font-bold text-[#546B41] shrink-0">
                      #{index + 1}
                    </span>
                  </div>

                  {rec.movie && (
                    <div className="mt-2 space-y-0.5">
                      <Genre genre={rec.movie.genre} />
                      <Year year={rec.movie.year} />
                      <div className="mt-1">
                        <Rating rating={rec.movie.rating} />
                      </div>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-[#99AD7A] flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#0B542D]">
                      Why we recommend it
                    </p>
                    <p className="text-sm text-[#546B41] mt-1">
                      {rec.reason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && !error && recommendations.length === 0 && (
        <p className="text-center text-[#546B41] py-6">
          Click the button above to get personalized movie picks.
        </p>
      )}
    </div>
  );
}
