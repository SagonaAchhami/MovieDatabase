import Navbar from "./Components/Navbar";
import MovieGrid from "./Components/MovieGrid";

function App() {
  return (
    <div className="min-h-screen bg-[#DCCCAC]">
      <Navbar />

      <div className="max-w-7xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-center text-[#546B41] mb-10">
  Featured Movies
</h2>

        <MovieGrid />
      </div>
    </div>
  );
}

export default App;