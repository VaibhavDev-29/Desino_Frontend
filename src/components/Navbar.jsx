import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Desino_logo from "/Desino_logo.svg";
import { TbShoppingBagHeart } from "react-icons/tb";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="bg-white shadow-none ml-5 mr-5">
        {/* Above Section */}
        <div className="h-25 pl-5 pt-3 flex justify-between items-center">
          <RiMenu2Fill size={32} />
          <div className="flex items-center">
            <img src={Desino_logo} alt="Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold">Designo</h1>
          </div>
          <div className="flex items-center gap-x-6 pr-5">
            <Link to={""}>About</Link>
            <Link>FAQs</Link>
            <TbShoppingBagHeart size={32} />
          </div>
        </div>

        {/* Below Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6">
            <input
            type="text"
            placeholder="Categories"
            className=" bg-gray-100 rounded-2xl h-8 p-2.5"
          />
          <input
            type="text"
            placeholder="New Product"
            className=" bg-gray-100 rounded-2xl h-8 p-2.5"
          />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" bg-gray-100 w-120 rounded-2xl h-8 p-2.5"
          />
          <div className="flex items-center gap-x-6 pr-5">
            <Link className="border-2 border-gray-100 rounded-2xl h-8 w-12 text-center ">
              Men
            </Link>
            <Link className="border-2 border-gray-100 rounded-2xl h-8 w-17 text-center ">
              Women
            </Link>
            <Link className="border-2 border-gray-100 rounded-2xl h-8 w-17 text-center ">
              Children
            </Link>
            <Link className="border-2 border-gray-100 rounded-2xl h-8 w-15 text-center ">
              Brands
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
