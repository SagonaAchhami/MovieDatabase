function Navbar() {
  return (
    <nav className="bg-[#546B41] text-[#DCCCAC] p-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MovieDB</h1>

      <div className="flex gap-8 hover:text-[#99AD7A] transition">
        <a href="#" >Browse </a>
        <a href="#" >Watchlist</a>
        <a href="#" >Add Movie </a>
      </div>
    </nav>
  );
}

export default Navbar;