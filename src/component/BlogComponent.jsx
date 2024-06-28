import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogComponent = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-background-color py-24">
      <div className="container mx-auto">

      
      <div className="grid md:grid-cols-4  sm:grid-cols-2 gap-4 cursor-pointer mt-12 ">
        <div className="grid justify-items-center text-center shadow-2xl p-8 hover:bg-white bg-orange rounded-2xl transition duration-300 ">
          <img
            className="text-center transition duration-300 transform hover:scale-105"
            src="/image/image-19.jpg"
          />
          <p className="text-2xl font-bold mt-4">
            Working on Best Breeding Processes Of Cows
          </p>
          <p className="mt-2">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing.
          </p>
        </div>

        <div className="grid justify-items-center text-center shadow-2xl p-8 hover:bg-white bg-orange rounded-2xl transition duration-300 ">

          <img
            className="text-center transition duration-300 transform hover:scale-105"
            src="/image/image-20.jpg"
          />
          <p className="text-2xl font-bold mt-4">
            Working on Best Breeding Processes Of Cows
          </p>
          <p className="mt-2">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing.
          </p>
        </div>

        <div className="grid justify-items-center text-center shadow-2xl p-8 hover:bg-white bg-orange rounded-2xl transition duration-300 ">

          <img
            className="text-center transition duration-300 transform hover:scale-105  "
            src="/image/image-21.jpg"
          />
          <p className="text-2xl font-bold mt-4 ">Milk Preservation In Farm</p>
          <p className="mt-4">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing.
          </p>
        </div>

        <div className="grid justify-items-center text-center shadow-2xl p-8 hover:bg-white bg-orange rounded-2xl transition duration-300 ">

          <img
            className="text-center transition duration-300 transform hover:scale-105  "
            src="/image/image-22.jpg"
          />
          <p className="text-2xl font-bold mt-4 ">
            Automated Milking for High Production of Milk
          </p>
          <p className="mt-4">
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing.
          </p>
        </div>
      </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default BlogComponent;
