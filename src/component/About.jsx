import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FarmStory from "./farmStory";
import Teamcomponent from "./Teamcomponent";
import AllProductImg from "./AllProductImg";
import SliderComponent from "./SliderComponent";
import OurShop from "./OurShop";

const About = () => {
  return (
    <>
    <SliderComponent/>
    <div className="bg-background-color  ">
      <div className="container mx-auto">
        <p className="text-5xl font-bold text-center pt-4 ">Safe and Healthy Milk</p>
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

     
        
      <FarmStory/>

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
            <div class="absolute -bottom-12 left-8 md:p-8 xs:p-4  bg-orange">
    <p className="md:text-4xl sm:text-xl">CALL TO GET US.</p>
    <p className="text-xl md:mt-4 sm:mt-1">1234567890</p>
  </div>

        </div>

        </div>
        

      </div>
      </div>
      <Teamcomponent/>
      <OurShop/>
    
    </>
  );
};

export default About;
