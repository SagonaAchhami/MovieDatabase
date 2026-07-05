import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#546B41] text-white py-6 text-center">
      <h1 className="text-3xl font-bold mb-3">
        🎬 Movie Database
      </h1>

      <div className="flex justify-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/">Browse</Link>
        <Link to="/add">Add Movie</Link>
      </div>
    </nav>
  );
}