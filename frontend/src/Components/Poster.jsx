function Poster({ poster, title }) {
  return poster ? (
    <img
      src={poster}
      alt={title}
      className="w-full h-64 object-cover"
    />
  ) : (
    <div className="bg-[#99AD7A] h-64 flex items-center justify-center text-5xl">
      🎬
    </div>
  );
}

export default Poster;