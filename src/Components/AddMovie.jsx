import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddMovie({ onAddMovie }) {
  const navigate = useNavigate(); 
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      genre,
      year,
      director,
      synopsis,
    };

  
    onAddMovie(newMovie);

    // reset form
    setTitle("");
    setGenre("");
    setYear("");
    setDirector("");
    setSynopsis("");
  };
  return (
  <div className="flex justify-center items-center py-10 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-5" >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Add New Movie </h2>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Movie Title
          </label>
          <input type="text" placeholder="Enter movie title" value={title} onChange={(e) => setTitle(e.target.value)}  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Genre
          </label>
          <input type="text" placeholder="Enter genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700" required />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Release Year
          </label>
          <input type="number" placeholder="e.g. 2025" value={year} onChange={(e) => setYear(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700" required  />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Director
          </label>
          <input type="text" placeholder="Director's name" value={director} onChange={(e) => setDirector(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700" required />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Synopsis
          </label>
          <textarea rows="4" placeholder="Write a short synopsis..." value={synopsis} onChange={(e) => setSynopsis(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-700 resize-none" required  ></textarea>
        </div>
       <div className="flex gap-4">
  <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded-lg" >
    Submit
  </button>
  <button type="button" onClick={() => navigate("/")} className="bg-gray-500 text-white px-6 py-2 rounded-lg" >
    Cancel
  </button>
</div>
      </form>
    </div>
  );
}