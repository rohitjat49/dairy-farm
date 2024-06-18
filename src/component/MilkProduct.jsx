import React from "react";

const MilkProduct = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center mt-8 gap-8">
          <div className="flex justify-center items-center">
            <img className="" src="/image/Milk-1-1.png" />
          </div>
          <div className=" flex flex-col justify-center items-start">
            <div className="text-5xl font-bold">Pure Milk</div>
            <div className=" text-xl">
              Milk is one of the essential elements of our daily diet. The
              majority of us start our day with a cup of milk or other forms.
              With Sid’s Farm, your quest to find the purest milk is now over.
              We provide unadulterated, raw milk, free of chemicals or
              preservatives in its purest form, with around 45 tests done before
              packaging.
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
      <div className="bg-background-color">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center my-8">
            <div className="flex justify-center  items-center">
            <img className="" src="/image/sdfsdfsdfsdfsdfdsf-removebg-preview.png" />
            </div>
            <div>
              <div className="text-4xl font-bold  flex flex-col justify-center items-start">
                Cow Milk
              </div>
              <div className="text-base">
                At dairy farm, we give the best care to our cows and feed them
                with home-grown fodder for the best quality milk possible. Cow
                milk is a good source of protein and calcium, as well as
                nutrients including vitamin B12 and iodine. It contains
                magnesium, which is important for bone development and muscle
                function.
              </div>
              <div className="text-3xl font-bold mt-8">
                Nutritional Benefits
              </div>
              <div>
                <span className="font-base upparcase text-xl">cows:</span>
                <span className="ms-2">HALLIKAR, MALNAD GIDDA, GIR</span>
              </div>
              <div>
                <span className="font-base upparcase text-xl">QUALITY:</span>
                <span className="ms-2">FAT: 3.8%, SNF: 8.0 (approx.)</span>
              </div>
              <div>
                <span className="font-base upparcase text-xl">PACKAGING:</span>
                <span className="ms-2">500ML POUCH, 1000ML GLASS BOTTLE</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 items-center my-8">
            
            <div>
              <div className="text-4xl font-bold  flex flex-col justify-center items-start">
                Buffalo Milk
              </div>
              <div className="text-base">
                maa Farm’s Buffalo milk has more protein, fat, nutrients and
                lactose. Consuming milk with higher protein content increases
                your feeling of fullness. This may help reduce food intake
                throughout the day and may help you control your weight and body
                fat.
              </div>
              <div className="text-3xl font-bold mt-8">
                Nutritional Benefits
              </div>
              <div>
                <span className="font-base upparcase text-xl">BUFFALOS:</span>
                <span className="ms-2">LOCAL BREED, MURRAH</span>
              </div>
              <div>
                <span className="font-base upparcase text-xl">QUALITY:</span>
                <span className="ms-2">FAT: 5.5%, SNF: 9.0 (approx.)</span>
              </div>
              <div>
                <span className="font-base upparcase text-xl">PACKAGING:</span>
                <span className="ms-2">500ML POUCH, 1000ML GLASS BOTTLE</span>
              </div>
            </div>
            <div className="flex justify-center  items-center">
            <img className="" src="/image/sdfsdfsdfsdfsdfdsf-removebg-preview.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MilkProduct;
