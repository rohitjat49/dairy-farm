import React from "react";

const AllProductImg = () => {
  return (
    <>
      <div className="bg-background-color">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center">
            <div className=" flex flex-col justify-center items-start">
              <div className="text-5xl font-bold">Product</div>
              <div className=" text-xl">
                Our healthy, creamy and delicious dairy products will make
                everything better. With our assurance of quality and purity, you
                can confidently add these to your diet and boost your overall
                wellness!
              </div>
              <div className="btn mt-12">
                <button className="bg-orange hover:bg-white p-4  rounded-full px-8 font-bold text-xl">
                  Order Now
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img className="" src="/image/products.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductImg;
