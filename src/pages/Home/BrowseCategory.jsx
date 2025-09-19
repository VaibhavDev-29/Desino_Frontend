import React from "react";
import CategoryCard from "../../components/CategoryCard";
import { Link } from "react-router-dom";

function BrowserCategory({ products }) {
  // categories lists
  const categories = [...new Set(products?.map((p) => p.category) || [])];

  // category with image (first product image)
  const categoryData = categories.map((category) => {
    const product = products.find((p) => p.category == category);
    return {
      name: category,
      image: product?.image,
    };
  });

  return (
    <>
      <div className="Categories-box">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Browse by Categories</h2>
          <div className="flex gap-3">
            {/* <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                  All
                </Link>
                <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center p-1 hover:bg-black hover:text-white ">
                  Women
                </Link>
                <Link className="border-2 border-gray-200 rounded-2xl h-10 w-20 text-center  p-1 hover:bg-black hover:text-white ">
                  Children
                </Link> */}

            {categoryData.map((cate) => (
              <Link
                key={cate.name || cate.id}
                className="border-2 border-gray-200 rounded-2xl h-auto w-auto text-center  p-1 hover:bg-black hover:text-white "
              >
                {cate.name}
              </Link>
            ))}
          </div>
        </div>

        <div className=" category-box shadow-2xs pb-5 flex justify-between gap-2">
          {categoryData.map((cate) => (
            <CategoryCard
              key={cate.name + cate.image}
              name={cate.name}
              image={cate.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BrowserCategory;
