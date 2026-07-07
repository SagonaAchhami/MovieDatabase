import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie({ onAddMovie }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [castInput, setCastInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      genre,
      year: Number(year),
      director,
      synopsis,
      rating: 0,
      cast: castInput.split(",").map((c) => c.trim()).filter(Boolean),
    };

    onAddMovie(newMovie);

    setTitle("");
    setGenre("");
    setYear("");
    setDirector("");
    setSynopsis("");
    setCastInput("");

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Add New Movie
        </h2>

        <input className="w-full border p-3 rounded" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <input className="w-full border p-3 rounded" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />

        <input type="number" className="w-full border p-3 rounded" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />

        <input className="w-full border p-3 rounded" placeholder="Director" value={director} onChange={(e) => setDirector(e.target.value)} required />

        <textarea className="w-full border p-3 rounded" placeholder="Synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} required />

        <input className="w-full border p-3 rounded" placeholder="Cast (comma separated)" value={castInput} onChange={(e) => setCastInput(e.target.value)} />

        <div className="flex gap-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded">
            Submit
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}