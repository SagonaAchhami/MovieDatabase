import { useState } from "react";

export default function AddMovie({ onAddMovie }) {
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

    // ✅ send data to parent
    onAddMovie(newMovie);

    // reset form
    setTitle("");
    setGenre("");
    setYear("");
    setDirector("");
    setSynopsis("");
  };
  return (
<form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 max-w-md">
    
      <input  type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)}/>
        
      <input onChange={(e) => setGenre(e.target.value)} placeholder="Year"  value={year} onChange={(e) => setYear(e.target.value)}/>

      <input type="text"  placeholder="Director"  value={director}  onChange={(e) => setDirector(e.target.value)}  />

      <textarea  placeholder="Synopsis"  value={synopsis}  onChange={(e) => setSynopsis(e.target.value)} />

      <button  type="submit"  className="bg-green-800 hover:bg-green-600 text-white py-2 rounded" >
        Submit
      </button>
    </form>
  );
}