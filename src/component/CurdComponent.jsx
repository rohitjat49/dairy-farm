import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AllProductImg from './AllProductImg'
import { useNavigate } from 'react-router-dom'

const CrudComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/Order-now`);
  };
  return (
   <>
   <Navbar/>
   <div className="bg-background-color pt-48">
    <AllProductImg/>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center py-8 gap-8">
            <div className="flex justify-center items-center">
              <img className="" src="/image/Curd.png" />
            </div>
            <div className=" flex flex-col justify-center items-start">
              <div className="text-5xl font-bold">NATURAL CURD </div>
              <div className=" text-xl">
              Vrindavan Farms naturally set curd is made from pure naturally grazed 100% natural cow milk. We feed cows with naturally grown green fodders such as Maize, Jowar, and Nappier Grass. We also feed dry fodder such as paddy and raagi straw. In addition to fooder, we also feed naturally formulated cattle feed along with oil cakes.
              </div>
              <div className="text-3xl font-bold mt-3">Variants Available:</div>
              <div className="">Cow and Buffalo </div>
              <div className="btn mt-12">
                <button className="bg-orange hover:bg-white p-4  rounded-full px-8 font-bold text-xl"
                onClick={handleButtonClick}>
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
                Curd
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
                <div className="text-base font-semibold">	22%</div>
              </div>

              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Potassium</div>
                <div className="text-base font-semibold">2%</div>
              </div>

              <div className="grid grid-cols-2 border-b-4 border-orange py-2">
                <div className="text-base font-semibold">Fat</div>
                <div className="text-base font-semibold">6%</div>
              </div>
            </div>

            <div className="flex justify-center  items-center">
              <img className=""  src="/image/yogurt.png" />
            </div>
          </div>
        </div>
       
      </div>
   <Footer/>
   </>
  )
}

export default CrudComponent