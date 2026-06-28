function Rating({ rating }) {
  let color = "bg-[#546B41]";

  if (rating >= 8) {
    color = "bg-[#546B41]";
  } else if (rating >= 5) {
    color = "bg-[#99AD7A]";
  } else {
    color = "bg-[#DCCCAC] border border-[#546B41] text-[#546B41]";
  }

  return (
    <span className={`${color} px-3 py-1 rounded-full font-semibold`}>
      ⭐ {rating}
    </span>
  );
}

export default Rating;