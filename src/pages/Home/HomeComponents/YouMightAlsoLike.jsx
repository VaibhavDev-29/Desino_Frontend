import React from "react";
import Card from "../../../components/card";

function YouMightAlsoLike({products}) {
  return (
    <>
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
    </>
  );
}

export default YouMightAlsoLike;
