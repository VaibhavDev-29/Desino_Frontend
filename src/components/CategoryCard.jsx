import React from "react";

function CategoryCard({name, image}) {
  return (
    <>
      <div className="relative w-90  rounded-xl overflow-hidden shadow-md mt-5 ">
        <img
          src={image} // Replace with your shoe image URL
          alt={name}
          className="w-100 h-70 object-fill"
        />

        {/* Button inside image */}
        <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-1 rounded-full shadow-sm text-sm font-semibold hover:bg-gray-300">
          {name}
        </button>
      </div>
    </>
  );
}

export default CategoryCard;
