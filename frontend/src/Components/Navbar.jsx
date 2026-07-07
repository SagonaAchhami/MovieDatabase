import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#546B41] text-[#DCCCAC] shadow-md">
      <div className="py-6 text-center border-b border-[#99AD7A]">
        <h1 className="text-4xl font-bold">🎬 Movie Database</h1>
      </div>

      <div className="flex justify-center gap-12 py-4 font-semibold text-lg">
        <Link to="/">Browse</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/add">Add Movie</Link>
      </div>
    </nav>
  );
}

export default Navbar;