import React from "react";
import Herosection from "../components/HeroSection";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <>
      <Herosection />
      <section className="p-6 ml-10 mr-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Browse by Categories</h2>
          <div className="flex gap-3">
            <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
              All
            </Link>
            <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center p-1 hover:bg-black hover:text-white ">
              Women
            </Link>
            <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
              Children
            </Link>
          </div>
        </div>
        <div>
            <CategoryCard/>
        </div>
      </section>
    </>
  );
}

export default Home;
