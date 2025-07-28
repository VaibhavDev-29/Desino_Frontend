import React, { useState } from "react";
import { RiMenu2Fill, RiArrowDropDownLine } from "react-icons/ri";
import Desino_logo from "/Desino_logo.svg";
import { TbShoppingBagHeart } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";






function Header() {

  const [menuIcon, setMenuIcon] = useState(false)



  const handleClick = () => {
    setMenuIcon(!menuIcon)
  }

  console.log(menuIcon);
  

  return (
    <>
      <header className="bg-white shadow-none ml-5 mr-5 relative">
        {/* Above Section */}
        <div className="h-25 pl-5 pt-3 flex justify-between items-center ">
          <RiMenu2Fill  size={32} onClick={handleClick}/>
          {menuIcon && <MobileNav  toggle = {handleClick} />}
          <div className="flex items-center justify-center ml-10">
            <img src={Desino_logo} alt="Logo" className="w-12 h-12 mt-1" />
            <h1 className="text-3xl font-bold">Desino</h1>
          </div>
          <div className="flex items-center gap-x-6 pr-5">
            <Link to={""}>About</Link>
            <Link>FAQs</Link>
            <Link className="border-2 bg-black text-white h-10 w-30 text-center px-2 py-1 rounded-3xl hover:bg-orange-500">Login/Signup</Link>
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
          <div className="flex items-center gap-x-4 pr-5">
            <Link className="border-2 border-gray-200 rounded-3xl h-10 w-25 text-center p-1 hover:bg-black hover:text-white ">
              Men
            </Link>
            <Link className="border-2 border-gray-200 rounded-3xl h-10 w-25 text-center p-1 hover:bg-black hover:text-white">
              Women
            </Link>
            <Link className="border-2 border-gray-200 rounded-3xl h-10 w-25 text-center p-1 hover:bg-black hover:text-white ">
              Children
            </Link>
            <Link className="border-2 border-gray-200 rounded-3xl h-10 w-25 text-center p-1 hover:bg-black hover:text-white ">
              Brands
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
