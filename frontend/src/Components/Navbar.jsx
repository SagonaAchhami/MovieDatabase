import { Link } from "react-router-dom";

function Navbar() {
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

          <Link to="/add" className="hover:text-[#DCCCAC]">
            Add Movie
          </Link>

          <Link to="/login" className="hover:text-[#DCCCAC]">
            Login
          </Link>

          <Link to="/register" className="hover:text-[#DCCCAC]">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;