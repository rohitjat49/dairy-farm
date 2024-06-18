import React from "react";
import AllProductImg from "./AllProductImg";

const Ghee = () => {
  return (
    <>
      <AllProductImg />
      <div className="bg-background-color">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center py-8 gap-8">
            <div className="flex justify-center items-center">
              <img className="" src="/image/cow-ghee.png" />
            </div>
            <div className=" flex flex-col justify-center items-start">
              <div className="text-5xl font-bold">Pure Ghee</div>
              <div className=" text-xl">
                Being a rich source of vitamin A, D, E and K, Ghee is an
                excellent source of energy and provides vitality to our body.
                Our ghee is made from fresh cream with a rich aroma, granular
                texture, natural golden yellow colour. Add this to your kitchen
                and make every dish you make extra flavourful.
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
            <div className="flex justify-center  items-center">
              <img className="" src="/image/cow-ghee-1.png" />
            </div>
            <div>
              <div className="text-4xl font-bold  flex flex-col justify-center items-start">
              Cow Ghee
              </div>
             
              <div className="text-3xl font-bold mt-8">
                Nutritional Benefits
              </div>
             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Total Energy</div>
                <div  className="text-base font-semibold">120KCal</div>
                
             </div>
             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Cholesterol</div>
                <div  className="text-base font-semibold">35mg</div>
                
             </div>

             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Vitamin A</div>
                <div  className="text-base font-semibold">8%</div>
                
             </div>

             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Fat</div>
                <div  className="text-base font-semibold">14g*</div>
                
             </div>
            
            </div>
          </div>


          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center gap-8 py-8">
          <div>
              <div className="text-4xl font-bold  flex flex-col justify-center items-start">
              Buffalo Ghee
              </div>
             
              <div className="text-3xl font-bold mt-8">
                Nutritional Benefits
              </div>
             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Total Energy</div>
                <div  className="text-base font-semibold">120KCal</div>
                
             </div>
             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Cholesterol</div>
                <div  className="text-base font-semibold">35mg</div>
                
             </div>

             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Vitamin A</div>
                <div  className="text-base font-semibold">8%</div>
                
             </div>

             <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Fat</div>
                <div  className="text-base font-semibold">14g*</div>
                
             </div>
            
            </div>
            <div className="flex justify-center  items-center">
              <img className="" src="/image/Buffalo-Ghee.png" />
            </div>
           
          </div>
        
        </div>
      </div>
      
    </>
  );
};

export default Ghee;
