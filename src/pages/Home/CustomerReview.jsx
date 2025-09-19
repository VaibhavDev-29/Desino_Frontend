import React from "react";
import model1 from "/model1.webp";
import model2 from "/model2.jpeg";
import model3 from "/model3.jpg";
import model4 from "/model4.jpg";
import model5 from "/model5.webp";
import model6 from "/model6.jpg";

function CustomerReview() {
  return (
    <>
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
    </>
  );
}

export default CustomerReview;
