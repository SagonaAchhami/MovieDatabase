export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-800 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
    >
      {text}
    </button>
  );
}