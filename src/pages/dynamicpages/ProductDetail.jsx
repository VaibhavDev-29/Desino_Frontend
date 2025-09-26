import React from "react";
// import { useEffect, useState} from "react";
// import { getProductById } from "../../Api/products";

function ProductDetail() {
  
  // const fetchData = async () => {
  //   try {
  //     const data = await getProductById(id);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);

  // };}

  
  // useEffect(() => {
  //   fetchData();
  // }, [ id ]);


  
  

  return (
    <>
    <div className='h-screen bg-white flex justify-center'>
        <h1 className='font-bold text-3xl pt-5'>Product Detail</h1>
    </div>
    </>
  );
}

export default ProductDetail;
