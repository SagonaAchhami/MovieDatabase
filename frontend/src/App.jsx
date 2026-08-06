import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";
import AddMovie from "./Components/AddMovie";
import MovieCard from "./Components/MovieCard";
import {
  getMovies,
  addMovie as addMovieAPI,
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from "./api/movieApi.js";
import Login from "./Components/Login";
import Signup from "./Components/Register";
import Recommend from "./Components/Recommend";

function LoginFirst() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-[#0B542D] mb-4">
        Please login first
      </h2>
      <p className="text-[#546B41] mb-6">
        You need to be logged in to access this page.
      </p>

      <Link
        to="/login"
        className="bg-[#0B542D] text-white px-6 py-3 rounded-lg font-semibold"
      >
        Login
      </Link>
    </div>
  );
}

function getLoggedInUser() {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(getLoggedInUser);

  useEffect(() => {
    setUser(getLoggedInUser());
  }, [location.pathname]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch {
        setErrors((prev) => [...prev, "Failed to load movies. Please try again later."]);
      } finally {
        setIsLoading(false);
      }
    }

    loadMovies();
  }, []);
  useEffect(() => {
  async function loadWatchlist() {
    if (!user) return;

    try {
      const response = await getWatchlist();
      setWatchlist(response.data);
    } catch (error) {
      console.error("Failed to load watchlist:", error);
    }
  }

  loadWatchlist();
}, [user]);

  const addMovie = async (movie) => {
    setErrors([]);

    try {
      const response = await addMovieAPI(movie);
      setMovies((prev) => [...prev, response.data]);
    } catch (error) {
  console.log(error.response?.data);

  setErrors((prev) => [
    ...prev,
    error.response?.data?.error ||
      error.response?.data?.message ||
      "Failed to add movie.",
  ]);
}
  };
const toggleWatchlist = async (movie) => {
  try {
    const exists = watchlist.some((m) => m._id === movie._id);

    if (exists) {
      const response = await removeFromWatchlist(movie._id);
      setWatchlist(response.data);
    } else {
      const response = await addToWatchlist(movie._id);
      setWatchlist(response.data);
    }
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.error || "Failed to update watchlist.");
  }
};
  const totalMovies = movies.length;

  const avgRating = movies.length
    ? (
        movies.reduce((sum, m) => sum + m.rating, 0) / movies.length
      ).toFixed(1)
    : 0;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogin = ({ token }) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (isLoading) {
    return <p className="text-center mt-10">Loading movies...</p>;
  }

  return (
    <div className="min-h-screen bg-[#DCCCAC]">
        <Navbar />

        {token && (
          <div className="text-center mb-4">
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}

        {errors.length > 0 && (
          <p className="text-center text-red-600">
            {errors[errors.length - 1]}
          </p>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <MovieGrid
                movies={filteredMovies}
                onSelectMovie={setSelectedMovie}
                selectedMovie={selectedMovie}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
                search={search}
                setSearch={setSearch}
                totalMovies={totalMovies}
                avgRating={avgRating}
                isLoggedIn={!!user}
              />
            }
          />

          <Route
            path="/add"
            element={
              user ? (
                <AddMovie onAddMovie={addMovie} />
              ) : (
                <LoginFirst />
              )
            }
          />

          <Route
            path="/watchlist"
            element={
              user ? (
                <div className="max-w-7xl mx-auto py-8 px-6">
  <h2 className="text-3xl font-bold text-center mb-8">
    Watchlist
  </h2>

  {watchlist.length === 0 ? (
    <p className="text-center">No movies in watchlist</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {watchlist.map((movie) => (
       <MovieCard
  key={movie._id || movie.title}
  movie={movie}
  onSelectMovie={setSelectedMovie}
  selectedMovie={selectedMovie}
  watchlist={watchlist}
  toggleWatchlist={toggleWatchlist}
  isLoggedIn={!!user}
/>
      ))}
    </div>
  )}
</div>
              ) : (
                <LoginFirst />
              )
            }
          />

           <Route
            path="/recommend"
            element={
              user ? (
                <div className="max-w-7xl mx-auto py-8 px-6">
                  <h2 className="text-3xl font-bold text-center mb-8">
                    AI Recommendations
                  </h2>

                  <Recommend movies={movies} watchlist={watchlist} />
                </div>
              ) : (
                <LoginFirst />
              )
            }
          />

          <Route path="login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

          
        </Routes>
      </div>
  );
}
