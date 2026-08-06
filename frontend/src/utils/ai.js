export function buildRecommendationPrompt(watchlist, movies) {
  const watchlistNames = watchlist.map((m) => m.title);
  const watchlistGenres = [...new Set(watchlist.map((m) => m.genre))];
  const catalog = movies.map(
    (m) => `${m.title} (${m.genre}, ${m.year}, rating ${m.rating})`
  );

  const watchlistText =
    watchlistNames.length > 0
      ? watchlistNames.join(", ")
      : "the user has an empty watchlist, so recommend from the general catalog";

  const genreText =
    watchlistGenres.length > 0
      ? `favorite genres: ${watchlistGenres.join(", ")}`
      : "no specific favorite genres";

  return `The user's watchlist contains: ${watchlistText}. Their ${genreText}.

Available movies in the application's database:
${catalog.join("\n")}

Recommend exactly 3 movies from the available movies above. Return ONLY valid JSON (no markdown, no extra text) in this exact shape:
[
  {
    "title": "exact movie title",
    "reason": "one or two sentence explanation of why this fits the user's taste"
  },
  ...
]`;
}

export function parseRecommendations(raw, movies) {
  let data = raw;

  const tryParse = (s) => {
    try {
      return JSON.parse(s.trim());
    } catch {
      return undefined;
    }
  };

  if (typeof raw === "string") {
    const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
    const text = fenced ? fenced[1] : raw;

    data = tryParse(text);

    if (data === undefined) {
      const start = text.indexOf("[");
      const end = text.lastIndexOf("]");

      if (start !== -1 && end > start) {
        data = tryParse(text.slice(start, end + 1));
      }
    }

    if (data === undefined) {
      return [];
    }
  }

  if (data && typeof data === "object" && !Array.isArray(data)) {
    const list = data.recommendations || data.movies || data.data;

    if (Array.isArray(list)) {
      data = list;
    }
  }

  if (!Array.isArray(data)) {
    return [];
  }

  const findMovie = (title) =>
    movies.find(
      (m) => m.title.toLowerCase() === String(title || "").toLowerCase()
    );

  return data
    .slice(0, 3)
    .map((item) => ({
      movie: findMovie(item.title),
      title: item.title,
      reason: item.reason || "No reason provided.",
    }))
    .filter((rec) => rec.title || rec.movie);
}
