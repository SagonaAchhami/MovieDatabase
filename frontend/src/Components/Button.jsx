export default function Button({ data = "Add New", onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-800 hover:bg-green-600 text-white text-xl px-6 py-3 rounded-2xl m-4"
    >
      {data}
    </button>
  );
}