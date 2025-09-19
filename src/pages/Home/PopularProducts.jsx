import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

function PopularProducts({ products }) {
  return (
    <>
    <div className="Productcard-box">
                <div className="flex justify-between items-center mt-5">
                  <h2 className="text-3xl font-medium">Popular Products</h2>
                  <div className="flex gap-3">
                    <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                      ALL
                    </Link>
                    <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center p-1 hover:bg-black hover:text-white ">
                      SHORTS
                    </Link>
                    <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                      JACKETS
                    </Link>
                    <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                      SHOES
                    </Link>
                    <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                      T-SHIRTS
                    </Link>
                  </div>
                </div>
    
                <div className="pb-5 flex justify-between gap-2">
                  {products
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map((product, index) => (
                      <div
                        className={index === 1 ? "flex-1" : "max-w-xs"}
                        key={product.id}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                </div>
    
                <div className=" shadow-2xs mb-8 pb-5 flex justify-between gap-2 ">
                  {products
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 4)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
              </div>
    </>
  )
}

export default PopularProducts