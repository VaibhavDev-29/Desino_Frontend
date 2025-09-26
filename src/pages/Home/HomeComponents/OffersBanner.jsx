import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


function OffersBanner() {
  return (
    <>
    <div className="h-50 bg-red-200 rounded-4xl flex flex-col justify-center items-center relative">
                <span className=" absolute border-2 border-black rounded-4xl w-20 text-center top-5">
                  Offers
                </span>
                <div className=" absolute text-2xl flex flex-col">
                  <span>ELEVATE YOUR STYLE — EXCLUSIVE OFFERS INSIDE</span>
                  <span className="text-center">
                    STYLE MEETS SAVINGS — SHOP SMARTER
                  </span>
                </div>
                <div className="flex justify-center items-center  absolute bottom-2">
                  <button className="bg-white w-40 h-8 rounded-3xl bottom-5 relative pr-4 cursor-pointer flex items-center justify-center">
                    CHECK IT NOW
                    <FaLongArrowAltRight className="absolute right-2 top-2 bg-black text-white rounded-4xl h-5 w-5 px-0.5" />
                  </button>
                </div>
              </div>
    </>
  )
}

export default OffersBanner