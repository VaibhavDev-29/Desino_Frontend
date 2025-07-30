import React from "react";

function CategoryCard() {
  return (
    <>
      <div className="relative w-90  rounded-xl overflow-hidden shadow-md mt-5 ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" // Replace with your shoe image URL
          alt="Shoes"
          className="w-full h-full object-cover"
        />

        {/* Button inside image */}
        <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-1 rounded-full shadow-sm text-sm font-semibold hover:bg-gray-300">
          SHOES
        </button>
      </div>
    </>
  );
}

export default CategoryCard;
