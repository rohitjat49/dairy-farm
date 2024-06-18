import React from "react";

const Services = () => {
  return (
    <>
      <div className="bg-background-color pb-12">
        <div className="services">
          <div className="container mx-auto">
            <p className="text-5xl text-white pt-12 font-bold text-center">Services</p>
          </div>
        </div>
        <div className="container mx-auto">
          <p className="text-5xl font-bold text-center ">
            Safe and Healthy Milk
          </p>
          <div className="flex items-center text-center justify-center mt-4 mb-4">
      <div className="text-center border-t-2 border-orange w-20"></div>
      <div className="mx-2">
        <img src="/image/cow-silhouette.png" alt="Cow" className='w-12'/>
      </div>
      <div className="border-t-2 border-orange w-20"></div>
    </div>
          <div className="grid md:grid-cols-2  sm:grid-cols-2 gap-4 cursor-pointer mt-12 ">
            <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white hover:bg-orange">
              <img className="text-center  " src="/image/image-19.jpg" />
              <p className="text-2xl font-bold mt-4 ">
              Working on Best Breeding Processes Of Cows
              </p>
              <p className="mt-2">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
              </p>
            </div>

            <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white hover:bg-orange">
              <img className="text-center  " src="/image/image-19.jpg" />
              <p className="text-2xl font-bold mt-4 ">
              Working on Best Breeding Processes Of Cows
              </p>
              <p className="mt-2">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
              </p>
            </div>

            <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white hover:bg-orange">
              <img className="text-center  " src="/image/image-21.jpg" />
              <p className="text-2xl font-bold mt-4 ">
              Milk Preservation In
Farm

              </p>
              <p className="mt-4">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
              </p>
            </div>

            <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white hover:bg-orange">
              <img className="text-center  " src="/image/image-22.jpg" />
              <p className="text-2xl font-bold mt-4 ">
              Automated Milking for High
              Production of Milk

              </p>
              <p className="mt-4">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing.
              </p>
            </div>
          </div>

          

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8 mb-48">
            <div className="relative">
              <img className="  " src="/image/pro-pic2.jpg" />
              <div class="absolute -bottom-48 left-24 p-8 ">
                <img className=" " src="/image/pro-pic1.jpg" />
              </div>
            </div>

            <div className="">
              <p className="text-2xl text-green">DISCOVER SERVICES</p>
              <p className="text-5xl">For That You Will Take Our Products.</p>
              <p className="text-xl">
                Pellentesque facilisis volutpat dolor sed efficitur. Vivamus
                sollicitudin vitae ipsum sed malesuada. Integer vitae sapien ut
                eros mollis ultrices. Nullam condimentum, nibh et posuere
                cursus. Nullam mollis diam augue. Maecenas ornare purus diam,
                nec pellentesque sem porttitor et.
              </p>

              <div className="btn mt-12">
                   <button className="bg-orange p-4  rounded-full px-8 font-bold text-xl">Order Now</button>
              </div>
            </div>


          </div>
        </div>
        <div className="addPic">
            <img className="" src="/image/add-one.png" />
        </div>
      </div>
    </>
  );
};

export default Services;
