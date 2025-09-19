import React from "react";
// import { CiStar } from "react-icons/ci";
// import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import polo from "/polo.jpg";

const Card = ({ product }) => {
  return (
    <div className="w-full mb-30 max-w-xs bg-none rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 bg-center bg-cover">
      <img
        src={product.image} // Replace with your image
        alt={product.title}
        className="w-[95%] ml-2 h-64 rounded-3xl"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-md font-semibold text-gray-800">{product.title}</h2>

        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          {[...Array(Math.floor(product.rating.rate))].map((_, i) => (
            <FaStar key={i} fill="currentColor" size={16} />
          ))}
          <FaStarHalfAlt />
          <span className="text-gray-600 text-xs ml-1">
            {product.rating.rate}
          </span>
          <span className="text-gray-600 text-xs ml-1 font-bold">
            ({product.rating.count}) Ratings
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-baseline">
            <span className="text-lg font-semibold text-gray-800">
              {product.price}
            </span>
            <span className="text-sm line-through text-gray-400">$242</span>
          </div>
          <span className="bg-red-100 text-red-500 px-2 py-0.5 text-xs rounded-full">
            -20%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
