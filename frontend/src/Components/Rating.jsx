function Rating({ rating }) {
  let color = "bg-red-500";

  if (rating >= 8) {
    color = "bg-green-500";
  } else if (rating >= 5) {
    color = "bg-amber-500";
  }

  return (
    <span className={`${color} px-3 py-1 rounded-full font-semibold`}>
      ⭐ {rating}
    </span>
  );
}

export default Rating;