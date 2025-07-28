import React from "react";
import { FaLongArrowAltRight, FaRupeeSign } from "react-icons/fa";
import shoutgirl from "/shoutgirl.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { BiLogOut, BiSolidPurchaseTag } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { PiPottedPlantFill } from "react-icons/pi";

function MobileNav({ toggle }) {
  return (
    <>
      <nav className="w-100 h-[100vh] bg-white fixed z-40 top-0 left-0 overflow-y-auto">
        <div className=" flex h-30 gap-5 bg-gradient-to-br from-orange-300 to-orange-100 mt-2">
          <div className="flex flex-col bg-gradient-to-br from-pink-500 to-orange-500 w-20 ml-1 h-20 rounded-b-full px-2 py-2">
            <div className="flex items-center w-full pl-2 text-xl">
              <FaRupeeSign className="text-white " />
              <span className="text-white">200</span>
            </div>
            <span className="text-center text-xl text-white">OFF</span>
          </div>
          <div>
            <img src={shoutgirl} alt="Logo" className="w-22 h-22 mt-1" />
          </div>
          <div className="flex flex-col gap-none">
            <span className="text-pink-500 text-2xl font-bold">FLAT</span>
            <span className=" font-bold text-pink-500">
              <FaRupeeSign className="inline text[10px] text-pink-500 mb-3" />
              <span className="text-2xl">200 OFF</span>
            </span>
            <p className="text-[9px] font-bold text-pink-500">
              ON YOUR 1 <sup>st</sup> PURCHASE
            </p>
            <p className="text-[9px] font-bold text-pink-500">
              {" "}
              + EXCITING OFFERS
            </p>
            <p className="text-[12px] font-bold text-red-600 ">
              SIGN UP. LOGIN
            </p>
          </div>
          <IoCloseSharp
            size={30}
            className="mr-1 mt-1 hover:cursor-pointer"
            onClick={toggle}
          />
        </div>

        <div>
          <ul className="flex flex-col mt-4  space-y-4 font-medium">
            <li>
              <Link className="flex items-center justify-between mr-4 hover:bg-gray-100 h-10 px-2 w-full">
                Men
                <FaLongArrowAltRight />
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between mr-4 hover:bg-gray-100 h-10 px-2 w-full">
                Women
                <FaLongArrowAltRight />
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between mr-4 hover:bg-gray-100 h-10 px-2 w-full">
                Kids
                <FaLongArrowAltRight />
              </Link>
            </li>
            <li>
              <Link className="flex items-center justify-between mr-4 hover:bg-gray-100 h-10 px-2 w-full">
                Beauty
                <FaLongArrowAltRight />
              </Link>
            </li>
          </ul>
          <div className="border-1 border-gray-300 mt-8"></div>
          <ul className="space-y-4">
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <IoHome size={20} />
              <Link
                to="/"
                className="font-mono font-light text-lg text-gray-900"
              >
                Home
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <FaTruckFast size={20} />
              <Link
                to="/services"
                className="font-mono font-light text-lg text-gray-900"
              >
                services
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <RiAccountCircleFill size={20} />
              <Link
                to="/profile"
                className="font-mono font-light text-lg text-gray-900"
              >
                Profile
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <FaCartShopping size={20} />
              <Link
                to="/carts"
                className="font-mono font-light text-lg text-gray-900"
              >
                Carts
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <BiSolidPurchaseTag size={20} />
              <Link
                to="/orders"
                className="font-mono font-light text-lg text-gray-900"
              >
                Orders
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 shadow-2xs cursor-pointer">
              <IoSettings size={20} />
              <Link
                to="/setting"
                className="font-mono font-light text-lg text-gray-900"
              >
                Setting
              </Link>
            </li>
            <li className="w-full flex items-center space-x-4 py-1.5 px-2.5 cursor-pointer">
              <BiLogOut size={20} />
              <Link
                to="/setting"
                className="font-mono font-light text-lg text-gray-900"
              >
                logout
              </Link>
            </li>
          </ul>
          <div className="h-20 bg-gradient-to-br from-orange-50 to-orange-200 mt-2 text-center flex justify-center items-center">
            Enjoy The Best Shopping Experience!
          </div>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
