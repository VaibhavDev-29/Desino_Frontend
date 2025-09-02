import React from "react";
import { FaRegHeart } from "react-icons/fa"; // Optional: heart icon

const ProductCard = ({product}) => {
  return (
    <div className="w-full bg-none rounded-3xl  relative overflow-hidden mt-5 mb-8 hover:shadow-lg transition duration-300 bg-center bg-cover">
      <div className="relative">
        <img
          alt={product.title}
          src={product.image} // replace with your image
          className="w-full h-100 rounded-4xl"
        />
        <div className="absolute top-4 right-8 bg-white rounded-full p-1 shadow">
          <FaRegHeart className="text-red-500 w-5 h-5 fill-red-500" />
        </div>
      </div>

      <div className="p-4 ml-4">
        <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>
        <p className="text-md font-semibold text-gray-700 mt-1">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
