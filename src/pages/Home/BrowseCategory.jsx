import React from 'react'
import CategoryCard from '../../components/CategoryCard'
import { Link } from 'react-router-dom'

function BrowserCategory() {
  return (
    <>
    <div className="Categories-box">
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

            <div className=" category-box shadow-2xs pb-5 flex justify-between gap-2">
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
              <CategoryCard />
            </div>
          </div>
    </>
  )
}

export default BrowserCategory