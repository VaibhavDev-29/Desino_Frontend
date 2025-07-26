import React from "react";
import { RiMenu2Fill, RiArrowDropDownLine } from "react-icons/ri";
import Desino_logo from "/Desino_logo.svg";
import { TbShoppingBagHeart } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
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
            <h1 className="text-2xl font-bold">Desino</h1>
          </div>
          <div className="flex items-center gap-x-6 pr-5">
            <Link to={""}>About</Link>
            <Link>FAQs</Link>
            <TbShoppingBagHeart size={32} />
          </div>
        </div>

        {/* Below Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-6 relative">
            <input
            type="text"
            placeholder="Categories"
            className=" bg-gray-100 rounded-3xl h-10 p-2.5 "
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <RiArrowDropDownLine size={24} />
          </span>
          <input
            type="text"
            placeholder="New Product"
            className=" bg-gray-100 rounded-3xl h-10 p-2.5"
          />
          <span className="absolute inset-y-0 left-42  flex items-center pointer-events-none">
            <RiArrowDropDownLine size={24} />
          </span>
          </div>
          <div className="flex items-center relative">
            <input
            type="text"
            placeholder="Search"
            className=" bg-gray-100 w-120 rounded-3xl h-10 p-2.5 "
          />
          <span className="absolute inset-y-0 right-6 pr-3 flex items-center pointer-events-none">
            <IoSearchOutline size={24} className="absolute"/>
          </span>
          </div>
          <div className="flex items-center gap-x-6 pr-5">
            <Link className="border-2 border-gray-200 rounded-2xl h-8 w-12 text-center ">
              Men
            </Link>
            <Link className="border-2 border-gray-200 rounded-2xl h-8 w-17 text-center ">
              Women
            </Link>
            <Link className="border-2 border-gray-200 rounded-2xl h-8 w-17 text-center ">
              Children
            </Link>
            <Link className="border-2 border-gray-200 rounded-2xl h-8 w-15 text-center ">
              Brands
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
