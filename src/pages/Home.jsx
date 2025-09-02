import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import Herosection from "../components/HeroSection";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import model1 from "/model1.webp";
import model2 from "/model2.jpeg";
import model3 from "/model3.jpg";
import model4 from "/model4.jpg";
import model5 from "/model5.webp";
import model6 from "/model6.jpg";
import Card from "../components/card";
import ProductCard from "../components/ProductCard";
import { getAllProducts, getProductById } from "../Api/products";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const fetchData = async () => {  
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProducts(data);
        setLoading(false)
        
      } catch (err) {
        console.log(err)
          setError("Failed to fetch products... ")
      } finally {
        setLoading(false);
      }
    }
  useEffect(() => {   
    fetchData();
  }, []);

  products.map((product) => {
    // console.log(product.category);
  });
  // console.log("products sir ,",products)
  products.forEach((item) => {
    // console.log(item.category)
  });
  console.log(error);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p className="text-sm text-red-600">{error} </p>
  }
  // console.log("category",category);

  // console.log(products[0]?.title);

  // const [category, setCategory] = useState([]);

  // {
  //   products.map((product) => setCategory(product.category));
  //   console.log(category);
  // }

  return (
    <>
      <Herosection />
      <section className="p-6 ml-10 mr-10">
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

        <div className="flex flex-col justify-center items-center text-4xl font-medium mt-10">
          <span>Over 100+ Customer</span>
          <span>reviews from our Client</span>
        </div>

        <div className="flex  justify-center items-center h-130">
          <div className="flex flex-col gap-1">
            <img
              src={model2}
              alt=""
              className="h-40 w-40 rounded-full object-cover"
            />
            <img
              src={model3}
              alt=""
              className="h-40 w-40 rounded-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={model1}
              alt=""
              className="h-120 w-120 rounded-full object-cover"
            />
          </div>
          <div className="">
            <img
              src={model5}
              alt=""
              className="h-120 w-120 rounded-full object-cover "
            />
          </div>
          <div className="flex flex-col gap-1">
            <img
              src={model4}
              alt=""
              className="h-40 w-40 rounded-full object-cover"
            />
            <img
              src={model6}
              alt=""
              className="h-40 w-40 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-5xl font-stretch-normal mt-10 mb-10">
          <span>You might also like</span>
        </div>

        <div className="flex justify-around">
          {products
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
