import React from "react";

const About = () => {
  return (
    <>
    <div className="bg-background-color ">
      <div className="container mx-auto">
        <p className="text-5xl font-bold text-center ">Safe and Healthy Milk</p>
        <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-4 cursor-pointer mt-12 ">
          <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white">
            <img className="text-center  " src="/image/01.png" />
            <p className="text-2xl font-bold mt-4 hover:text-orange">
              Farm <br /> Technological Leader
            </p>
            <p className="mt-2">
              Continually productize compelling quality for packed with all
              Elated Themes. Setting up to website and creating pages.
            </p>
          </div>

          <div className="grid justify-items-center text-center shadow-2xl p-8 bg-white">
            <img className="text-center  " src="/image/02.png" />
            <p className="text-2xl font-bold mt-4 hover:text-orange">
              Nature <br /> Milk For Making Ghee
            </p>
            <p className="mt-2">
              Continually productize compelling quality for packed with all
              Elated Themes. Setting up to website and creating pages.
            </p>
          </div>

          <div className="grid justify-items-center text-center  shadow-2xl p-8 bg-white">
            <img className="text-center  " src="/image/03.png" />
            <p className="text-2xl font-bold mt-4 hover:text-orange">
              3 days <br /> Convenient Delivery System
            </p>
            <p className="mt-4">
              Continually productize compelling quality for packed with all
              Elated Themes. Setting up to website and creating pages.
            </p>
          </div>
        </div>
      </div>

     
        <div className="container mx-auto pt-12">
          <div className="grid  md:grid-cols-3  sm:grid-cols-2 gap-4 ">
            <div class="...">
              <img className="" src="/image/cow.png" />
            </div>
            <div class="col-span-2 ...">
                <p className="text-5xl font-semibold">Know About Our Farm And History</p>
                <p className="text-xl mt-4">The FARM Animal Care Program standards are revised every three years to reflect the most current science and best management practices within the dairy industry. The current standards, rationale, and accountability measures have been reviewed and revised by the FARM Technical Writing Group and National Milk Producers Federation Animal Health and Well-Being Committee and approved by the National Milk Producers.</p>
            <div className="grid grid-cols-4 mt-12 text-orange">
                <div className="text-xl font-semibold">Modern Dairy</div>
                <div className="text-xl font-semibold">Natural &  Organic</div>
                <div className="text-xl font-semibold">Best  Products</div>
                <div className="text-xl font-semibold">Awarded Farm</div>

            </div>
            </div>
          </div>
        </div>
      

      <div className="container mx-auto mt-12">
      <div className="grid md:grid-cols-2  sm:grid-cols-1 gap-8 ">
        <div>
            <p className="text-xl text-orange">WHY CHOOSE US ?</p>

            <p className="text-4xl">We are very skilled in dairy farming.</p>
            <p className="text-xl text-orange">Duis a pellentesque velit, et amet sodales lacus. Etiam lobortis ligula vel enim pellentesque</p>
            <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas adipisci eos dolores provident, vero unde dolore rem nihil, expedita, inventore quam nam dolorum similique. Voluptatum magnam incidunt labore numquam totam.</p>   
        </div>

        <div className="relative">
            <img className=" " src="/image/cow-20.jpg"/>
            <div class="absolute -bottom-12 left-8   p-8  bg-orange">
    <p className="text-4xl">CALL TO GET US.</p>
    <p className="text-xl mt-4">1234567890</p>
  </div>

        </div>

        </div>
        

      </div>
      </div>
    </>
  );
};

export default About;
