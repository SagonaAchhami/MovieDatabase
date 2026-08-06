import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const getUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user") || "null");
    } catch {
      return null;
    }
  };

  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-[#0B542D] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold">
          🎬 Movie Database
        </Link>

        <div className="flex items-center gap-8 font-semibold">
          <Link to="/" className="hover:text-[#DCCCAC]">
            Browse
          </Link>

          <Link to="/watchlist" className="hover:text-[#DCCCAC]">
            Watchlist
          </Link>

          <Link to="/recommend" className="hover:text-[#DCCCAC]">
            AI Recommend
          </Link>

          <Link to="/add" className="hover:text-[#DCCCAC]">
            Add Movie
          </Link>

          {user ? (
            <>
              <span className="text-[#DCCCAC]">
                {user.name || (user.email ? user.email.split("@")[0] : "User")}
              </span>

              <button onClick={handleLogout} className="hover:text-[#DCCCAC] cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-[#DCCCAC]">
                Login
              </Link>

              <Link to="/register" className="hover:text-[#DCCCAC]">
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;