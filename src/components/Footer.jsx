import React from "react";
import { Link } from "react-router-dom";
import Desino_logo from "/logo-d.svg";
import visa from "/visa.png";
import mastercard from "/mastercard.png";
import rupay from "/rupay.svg";
import upi from "/upi.svg";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="h-115 bg-gray-100">
        <div className=" pt-40">
          <div className="flex justify-around pr-8 pl-5 gap-20">
            <div className="flex items-start justify-center flex-col  w-1/4 gap-5">
              <img src={Desino_logo} alt="Logo" className="w-40 h-10 ml-3" />
              <p className=" text-start ml-10">
                Designs made to reflect you. Thoughtfully crafted fashion that
                blends tradition with trend — for everyone, everywhere.
              </p>
              <div className="flex gap-4 justify-start items-start ml-10 mt-auto">
                <TiSocialFacebook size={30} className="bg-white rounded-3xl" />
                <FaInstagram size={30} className="bg-white rounded-3xl" />
                <TiSocialLinkedin size={30} className="bg-white rounded-3xl" />
                <FaGithub size={30} className="bg-white rounded-3xl" />
              </div>
            </div>
            <div className="w-1/4 flex justify-center items-start flex-col ">
              <h2 className="font-bold">COMPANY</h2>
              <div className="flex flex-col mt-10.5 mb-5 gap-2">
                <Link>About</Link>
                <Link>Features</Link>
                <Link>Works</Link>
                <Link>Career</Link>
              </div>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-start ">
              <h2 className="mr-25 font-bold">HELP</h2>
              <div className="flex flex-col mt-10.5 mb-5 gap-2">
                <Link>Coustomer Support</Link>
                <Link>Delivery Detail</Link>
                <Link>Term & Condition</Link>
                <Link>Privacy Policy</Link>
              </div>
            </div>
            <div className="w-1/4 flex flex-col justify-center items-start ">
              <h2 className="mr-24 font-bold">FAQ</h2>
              <div className="flex flex-col mt-10.5 mb-5 gap-2">
                <Link>Account</Link>
                <Link>Manage Deliveries</Link>
                <Link>Orders</Link>
                <Link>Payments</Link>
              </div>
            </div>
          </div>
          <div className="border-1 border-gray-200 mt-8 w-[91%] m-auto " />
          <div className="flex justify-between">
            <div className="ml-20 flex justify-center items-center gap-0.5">
              <span>Desino 2025 </span>{" "}
              <span>
                <PiCopyrightLight />
              </span>
              <span>, All Rights Reserved</span>
            </div>
            <div className="flex flex-row gap-3 mr-20 mt-1">
              <img src={visa} alt="Logo" className="h-12 w-12" />
              <img src={mastercard} alt="Logo" className="h-12 w-12" />
              <img src={rupay} alt="Logo" className="h-12 w-12" />
              <img src={upi} alt="Logo" className="h-12 w-12 " />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
