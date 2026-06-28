function Navbar() {
  return (
    <nav className="bg-[#546B41] text-[#DCCCAC] shadow-md">
      {/* Title */}
      <div className="py-6 text-center border-b border-[#99AD7A]">
        <h1 className="text-4xl font-bold">🎬 Movie Database</h1>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-12 py-4 font-semibold text-lg hover:text-[#99AD7A] transition">
        <a href="#">Browse</a>
        <a href="#" >Watchlist</a>
        <a href="#" >Add Movie</a>
      </div>
    </nav>
  );
}

export default Navbar;