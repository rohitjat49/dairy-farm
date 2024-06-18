import React from "react";
import AllProductImg from "./AllProductImg";

const Panner = () => {
  return (
    <>
    <AllProductImg/>
      <div className="bg-background-color">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center py-8 gap-8">
            <div className="flex justify-center items-center">
              <img className="" src="/image/sdfsdfsdfsdfsdfdsf-removebg-preview.png" />
            </div>
            <div className=" flex flex-col justify-center items-start">
              <div className="text-5xl font-bold">Panner </div>
              <div className=" text-xl">
                Vrindavan Farms Natural paneer is made from all-natural pure cow
                milk. Paneer is generally a common source of protein for
                non-meat eaters or vegetarians and hence it has become an
                integral part of curries in Punjabi cuisine or north Indian
                curries. We use natural vinegar and lemon to maintain natural
                flavor and aroma.  It is soft and
                delicious. Kids will simply love it.
              </div>
              <div className="text-3xl font-bold mt-3">Variants Available:</div>
              <div className="">Cow and Buffalo </div>
              <div className="btn mt-12">
                <button className="bg-orange hover:bg-white p-4  rounded-full px-8 font-bold text-xl">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background-color">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8 py-8">
            
            <div>
              <div className="text-4xl font-bold  flex flex-col justify-center items-start">
                Panner
              </div>

              <div className="text-3xl font-bold mt-8">
                Nutritional Benefits
              </div>
              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Total Energy</div>
                <div className="text-base font-semibold">265kcal</div>
              </div>
              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Protein</div>
                <div className="text-base font-semibold">18.3g</div>
              </div>

              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Potassium</div>
                <div className="text-base font-semibold">161mg</div>
              </div>

              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Fat</div>
                <div className="text-base font-semibold">2.6mg</div>
              </div>
            </div>

            <div className="flex justify-center  items-center">
              <img className="" src="/image/a1-paneer-bg.jpg" />
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Panner;
