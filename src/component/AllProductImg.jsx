import React from "react";
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const AllProductImg = () => {
  const navigate = useNavigate();

const handleButtonClick = () => {
  navigate(`/Order-now`);
};

  return (
    <>
      <div className="bg-background-color ">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center pb-12 ">
            <div className=" flex flex-col justify-center items-start">
              <div className="text-5xl font-bold">Product</div>
              <div className=" text-xl">
                Our healthy, creamy and delicious dairy products will make
                everything better. With our assurance of quality and purity, you
                can confidently add these to your diet and boost your overall
                wellness!
              </div>
              <div className="btn mt-12">
                <button className="bg-orange hover:bg-white p-4  rounded-full px-8 font-bold text-xl"
                 onClick={() => handleButtonClick()}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8">
              <img className="" src="/image/AllProductImage.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductImg;
